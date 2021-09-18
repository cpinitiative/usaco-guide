import * as Sentry from '@sentry/browser';

// keeping notes separate as it is not in the user docs, but rather in a individual notes doc
export default class UserNotesAPI {
  userNotesValue: Map<string, string>;

  getNote = (problemName: string) => {};

  initNotes = () => {};

  setNote = (problemId: string, noteContent: string) => {
    try {
      console.log('logged');
    } catch (e) {
      Sentry.captureException(e, {
        extra: {
          problemId,
          noteValue: noteContent,
          fbData: {},
          thisValue: { ...this },
        },
      });

      alert(
        "We're sorry, but an error occurred. This error has been automatically sent to us, but you can email us to provide details if you wish."
      );
    }
  };
}
