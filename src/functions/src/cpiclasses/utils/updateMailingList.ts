import axios from 'axios';
import * as crypto from 'crypto';
import * as functions from 'firebase-functions';
const MAILCHIMP_API_KEY = functions.config().mailchimp.apikey;

export default async function updateMailingList({
  email,
  firstName,
  lastName,
  preferredLanguage,
  ip,
  level,
  fullFinancialAid,
}: {
  email: string;
  firstName: string;
  lastName: string;
  preferredLanguage: string;
  ip: string;
  level: string;
  fullFinancialAid: boolean;
}) {
  try {
    const listID = 'e122c7f3eb';
    const emailHash = crypto
      .createHash('md5')
      .update(email.toLowerCase())
      .digest('hex');
    const existingFields = await axios
      .get(
        `https://us2.api.mailchimp.com/3.0/lists/${listID}/members/${emailHash}`,
        {
          auth: {
            username: 'nousername',
            password: MAILCHIMP_API_KEY,
          },
        }
      )
      .then(resp => {
        return resp.data;
      })
      .catch(e => {
        console.log('Mailchimp Existing Fields GET Error');
        // the user probably doesn't exist
        // so just assume there is no previous data
        if (e.status !== 404) {
          console.log(e?.toJSON());
        }
        return Promise.resolve({});
      });
    const data = {
      email_address: email,
      status: 'subscribed',
      status_if_new: 'subscribed',
      ip_signup: ip,
      merge_fields: {
        ...(existingFields?.merge_fields || {}),
        FNAME: firstName,
        LNAME: lastName,
        PROGLANG: preferredLanguage === 'java' ? 'Java' : preferredLanguage === 'cpp' ? 'C++' : 'Python',
      },
    };

    await axios.put(
      `https://us2.api.mailchimp.com/3.0/lists/${listID}/members/${emailHash}`,
      data,
      {
        auth: {
          username: 'nousername',
          password: MAILCHIMP_API_KEY,
        },
      }
    );

    await axios.post(
      `https://us2.api.mailchimp.com/3.0/lists/${listID}/members/${emailHash}/tags`,
      {
        tags: [
          {
            name: `Bronze Video Class`,
            status: 'active',
          },
          ...(fullFinancialAid
            ? [
                {
                  name: `Bronze Video Class Full Financial Aid`,
                  status: 'active',
                },
              ]
            : []),
        ],
      },
      {
        auth: {
          username: 'nousername',
          password: MAILCHIMP_API_KEY,
        },
      }
    );
  } catch (error) {
    console.log('INTERNAL ERROR', error);
    throw new functions.https.HttpsError(
      'internal',
      'An internal error occurred while trying to send the order confirmation email.'
    );
  }
}
