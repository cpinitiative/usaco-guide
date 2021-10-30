import classNames from 'classnames';
import {
  arrayUnion,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { useFirebaseApp } from '../../hooks/useFirebase';

export default function Feedback({ videoId }): JSX.Element {
  const firebaseApp = useFirebaseApp();
  const db = getFirestore(firebaseApp);
  const {
    firebaseUser: { uid },
  } = useContext(UserDataContext);
  const baseClasses =
    'rounded-full border h-8 w-8 text-xl transform transition focus:outline-none';
  const unselectedClasses = 'hover:scale-110 border-gray-200';
  const selectedClasses = 'scale-110 border-cyan-600';

  const [selected, setSelected] = useState<
    'very_bad' | 'bad' | 'good' | 'great' | null
  >(null);
  const [comment, setComment] = useState('');
  const [showAdditionalFeedback, setShowAdditionalFeedback] = useState(false);
  useEffect(() => {
    if (!db || !uid) return;
    getDoc(doc(db, 'videos', videoId, 'feedback', uid)).then(data => {
      setSelected(data.data()?.rating || null);
    });
  }, [uid, db]);

  return (
    <>
      <div className="text-center">
        <span className="flex items-center space-x-2 justify-left">
          <div className="font-medium">How was the video?</div>
          {[
            ['😨', 'very_bad', 'very bad'],
            ['🤨', 'bad'],
            ['😀', 'good'],
            ['😍', 'great'],
          ].map(
            ([emoji, key, name]: [
              string,
              'very_bad' | 'bad' | 'good' | 'great',
              string
            ]) => (
              <button
                key={key}
                type="button"
                title={`Rate video as ${name || key}`}
                className={classNames(
                  baseClasses,
                  selected === key ? selectedClasses : unselectedClasses
                )}
                onClick={() => {
                  if (selected === key) {
                    setSelected(null);
                    updateDoc(doc(db, 'videos', videoId, 'feedback', uid), {
                      rating: null,
                    });
                  } else {
                    setSelected(key);
                    if (key == 'very_bad' || key == 'bad') {
                      setShowAdditionalFeedback(true);
                    }
                    toast.promise(
                      setDoc(
                        doc(db, 'videos', videoId, 'feedback', uid),
                        {
                          rating: key,
                        },
                        { merge: true }
                      ),
                      {
                        loading: 'Submitting...',
                        success: 'Thanks for the feedback!',
                        error: err => {
                          console.log(err);
                          return 'Error submitting feedback.';
                        },
                      }
                    );
                  }
                }}
              >
                {emoji}
              </button>
            )
          )}
          {!showAdditionalFeedback && (
            <button
              title={'Write us a private comment'}
              type="button"
              className={classNames(
                'rounded-full border h-8 px-2 ml-4 text-sm transform transition focus:outline-none hover:border-cyan-600'
              )}
              onClick={() => setShowAdditionalFeedback(true)}
            >
              Comment
            </button>
          )}
        </span>
      </div>
      {showAdditionalFeedback && (
        <form
          onSubmit={e => {
            e.preventDefault();
            setShowAdditionalFeedback(false);
            const originalComment = comment;
            setComment('');
            toast.promise(
              setDoc(
                doc(db, 'videos', videoId, 'feedback', uid),
                {
                  comments: arrayUnion(originalComment),
                },
                { merge: true }
              ),
              {
                loading: 'Submitting...',
                success: 'Thanks for your comment!',
                error: err => {
                  console.log(err);
                  return 'Error submitting comment.';
                },
              }
            );
          }}
        >
          <textarea
            required
            style={{
              height: '4rem',
              minHeight: '4rem',
            }}
            className="text-sm w-full mt-4 px-2 py-2 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md mr-2"
            placeholder="Tell us how you felt about the video..."
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
          <div className="block">
            <button
              type="submit"
              className="items-center mt-2 sm:mt-0 px-3 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
            >
              Submit Private Comment
            </button>
            <button
              type="button"
              onClick={() => setShowAdditionalFeedback(false)}
              className="ml-2 items-center mt-2 sm:mt-0 px-3 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
            >
              Close
            </button>
          </div>
        </form>
      )}
    </>
  );
}
