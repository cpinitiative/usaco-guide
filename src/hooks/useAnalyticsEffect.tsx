import React from 'react';

/**
 * Tracks page analytics via Google Analytics (GA4).
 * GA is loaded via @next/third-parties/google in _app.tsx.
 * Pageview events are sent automatically by the GA script on route changes.
 *
 * Previously this hook made direct Firebase RTDB PUT requests to a public URL,
 * which was removed because it required an open write rule on the database and
 * could be abused by anyone to increment arbitrary counters.
 */
export const useAnalyticsEffect = () => {
  React.useEffect(() => {
    // GA4 pageview is tracked automatically by @next/third-parties/google.
    // No additional tracking needed here.
  }, []);
};
