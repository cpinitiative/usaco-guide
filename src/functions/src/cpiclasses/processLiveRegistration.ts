import * as checkoutNodeJssdk from '@paypal/checkout-server-sdk';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as payPalClient from './utils/payPalClient';
import updateLiveMailingList from './utils/updateLiveMailingList';

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

    // 5. Validate the transaction details are as expected
    if (order.result.purchase_units[0].amount.value !== '100.00') {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'The value of the order was not $100.'
      );
    }
    const ref = admin
      .firestore()
      .collection('classes-registration')
      .doc('2022january')
      .collection('registrations')
      .doc();
    console.log(
      `========== Processing registration ${ref.id} / ${firstName} ${lastName} / ${email} ==========`
    );
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
      updateLiveMailingList({
        email,
        firstName,
        lastName,
        preferredLanguage,
        ip: context.rawRequest.ip,
        level,
        fullFinancialAid: false,
      }),
    ]);

    return {
      registrationId: ref.id,
      paymentId: orderID,
    };
  }
);
