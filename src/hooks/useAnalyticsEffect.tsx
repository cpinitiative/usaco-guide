import * as React from 'react';
import UserDataContext from '../context/UserDataContext/UserDataContext';
import useFirebase from './useFirebase';

export const useAnalyticsEffect = () => {
  useFirebase(firebase => {
    const incrementPageViews = firebase
      .functions()
      .httpsCallable('incrementPageViews');

    // @ts-ignore
    incrementPageViews({ gaEnabled: window.ga && ga.create });
  });
};
