import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('cookie-consent');
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const accept = (value: string) => {
    localStorage.setItem('cookie-consent', value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex-1 text-sm text-gray-700 dark:text-gray-300">
          We use cookies and similar technologies to enhance your experience, analyze site usage,
          and assist in our marketing efforts. By continuing to use our site, you agree to our use
          of cookies.{' '}
          <Link href="/privacy" className="text-blue-600 underline dark:text-blue-400">
            Learn more in our Privacy Policy
          </Link>
          .
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => accept('necessary')}
            className="btn btn-secondary text-sm"
          >
            Necessary Only
          </button>
          <button
            type="button"
            onClick={() => accept('all')}
            className="btn btn-primary text-sm"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
