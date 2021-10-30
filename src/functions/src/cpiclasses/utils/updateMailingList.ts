import axios from 'axios';
import * as crypto from 'crypto';
import * as functions from 'firebase-functions';
const MAILCHIMP_API_KEY = functions.config().mailchimp.apikey;
import "firebase-functions/lib/logger/compat";

export default async function updateMailingList({
  email,
  firstName,
  lastName,
  preferredLanguage,
  ip,
  level,
  fullFinancialAid,
  joinLink,
}: {
  email: string;
  firstName: string;
  lastName: string;
  preferredLanguage: string;
  ip: string;
  level: string;
  fullFinancialAid: boolean;
  joinLink: string;
}) {
  try {
    functions.logger.warn("Updating Mailing List")
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
        functions.logger.warn('No Mailchimp Existing Fields Found (or an error occurred)');
        // the user probably doesn't exist
        // so just assume there is no previous data
        if (e.response?.status !== 404) {
          functions.logger.warn(e?.toJSON());
        }

        // return empty object
        return Promise.resolve({});
      });
    functions.logger.warn("done getting existing fields")
    const data = {
      email_address: email,
      status: 'subscribed',
      status_if_new: 'subscribed',
      ip_signup: ip,
      merge_fields: {
        ...(existingFields?.merge_fields || {}),
        FNAME: firstName,
        LNAME: lastName,
        PROGLANG:
          preferredLanguage === 'java'
            ? 'Java'
            : preferredLanguage === 'cpp'
            ? 'C++'
            : 'Python',
        BRVCJOINLK: joinLink,
      },
    };
    functions.logger.warn("data", data)
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
    functions.logger.warn("posting mailchimp")
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
    functions.logger.warn("done posting to mailchimp")
  } catch (error) {
    functions.logger.warn('INTERNAL ERROR', error);
    throw new functions.https.HttpsError(
      'internal',
      'An internal error occurred while trying to send the order confirmation email.'
    );
  }
}
