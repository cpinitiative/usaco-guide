import * as checkoutNodeJssdk from '@paypal/checkout-server-sdk';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as payPalClient from './utils/payPalClient';
import updateMailingList from './utils/updateMailingList';
import "firebase-functions/lib/logger/compat";

if (admin.apps.length === 0) {
  admin.initializeApp();
}

export default functions.https.onCall(
  async (
    {
      level,
      firstName,
      lastName,
      email,
      preferredLanguage,
      referrer,
      referrerDetail,
      timezone,
      orderData,
    },
    context
  ) => {
    functions.logger.warn("start process registration")
    const orderID = orderData.orderID;

    if (
      !level ||
      !firstName ||
      !lastName ||
      !email ||
      !preferredLanguage ||
      !referrer ||
      !timezone ||
      !orderData ||
      !orderID
    ) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'The request to verify the payment was called with improper data.'
      );
    }

    functions.logger.warn("start get reg details")
    // 3. Call PayPal to get the transaction details
    const request = new checkoutNodeJssdk.orders.OrdersGetRequest(orderID);

    let order;
    try {
      order = await payPalClient.client().execute(request);
    } catch (err) {
      // 4. Handle any errors from the call
      console.error(err);
      throw new functions.https.HttpsError(
        'internal',
        'An internal error occurred while trying to verify the order.'
      );
    }
    functions.logger.warn("start validate transaction details")
    // 5. Validate the transaction details are as expected
    if (order.result.purchase_units[0].amount.value !== '25.00') {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'The value of the order was not $25.'
      );
    }
    functions.logger.warn("start make join link")
    // create bronze class join link
    const joinLinkRef = admin.firestore().collection('group-join-links').doc();
    await joinLinkRef.set({
      groupId: 'd7eYGfddXq3m2trXG2xt',
      revoked: false,
      numUses: 0,
      maxUses: 1,
      expirationTime: null,
      usedBy: [],
      author: 'REGISTRATION_' + email,
      id: joinLinkRef.id,
    });

    const ref = admin
      .firestore()
      .collection('classes-registration')
      .doc('usacobronze')
      .collection('registrations')
      .doc();
    functions.logger.warn("start update mailing list")
    await Promise.all([
      ref.set({
        financialAid: false,
        paid: true,
        orderId: orderData.orderID,
        orderDetails: orderData,
        level,
        personalInfo: {
          firstName,
          lastName,
          email,
          preferredLanguage,
          referrer,
          referrerDetail,
          timezone,
        },
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      }),

      updateMailingList({
        email,
        firstName,
        lastName,
        preferredLanguage,
        ip: context.rawRequest.ip,
        level,
        fullFinancialAid: false,
        joinLink: `https://usaco.guide/groups/join?key=${joinLinkRef.id}`,
      }),
    ]);
    functions.logger.warn("onbeforereturn")
    return {
      registrationId: ref.id,
      paymentId: orderID,
    };
  }
);
