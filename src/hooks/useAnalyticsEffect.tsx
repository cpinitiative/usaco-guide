import React from 'react';

interface AnalyticsWindow extends Window {
  ga?: {
    create?: unknown;
  };
}

export const useAnalyticsEffect = () => {
  React.useEffect(() => {
    if ((window as AnalyticsWindow).ga && (window as AnalyticsWindow).ga.create) {
      // google analytics loaded
    } else {
      // google analytics got blocked
      fetch(
        'https://usaco-guide.firebaseio.com/analytics/no_ga_pageviews.json',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ '.sv': { increment: 1 } }),
        }
      );
    }
    fetch('https://usaco-guide.firebaseio.com/pageviews.json', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ '.sv': { increment: 1 } }),
    });
  }, []);
};
