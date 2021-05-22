import React from 'react';

export const useAnalyticsEffect = () => {
  React.useEffect(() => {
    if ((window as any).ga && (window as any).ga.create) {
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
