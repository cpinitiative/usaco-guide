import * as React from 'react';
import { useContext } from 'react';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';
import { SectionID } from '../../../../content/ordering';

export default function SidebarAd({
  currentSection,
}: {
  currentSection: SectionID;
}) {
  const { adSettings, setAdSettings } = useContext(UserDataContext);
  const shouldShowAd = !adSettings?.hideMarch2021;

  React.useEffect(() => {
    setAdSettings({ ...adSettings, hideMarch2021: false });
  }, []);

  console.log(currentSection);

  if (!shouldShowAd) {
    return null;
  }

  let showClass =
    currentSection === 'general' ||
    currentSection === 'bronze' ||
    currentSection === 'silver';

  return (
    <div className="py-4 px-4 bg-gray-50 dark:bg-gray-900 relative mt-2 lg:mt-0">
      <span className="block font-medium text-lg leading-tight pr-8 mb-2">
        {showClass
          ? 'Online USACO Classes'
          : 'Teach USACO & Earn Volunteer Hours!'}
      </span>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
        {showClass
          ? 'Learn USACO from the same team that brought you the USACO Guide, with a curriculum integrated with the Guide.'
          : 'You can volunteer for the CPI’s USACO Classes and earn service hours while having fun teaching USACO!'}
      </p>
      <a
        href={
          showClass
            ? 'https://joincpi.org/classes?utm_source=uscao_guide&utm_medium=sidebar_promo&utm_campaign=march_2021_classes'
            : 'https://forum.usaco.guide/t/teach-for-the-competitive-programming-initiative-earn-volunteer-hours/972'
        }
        target="_blank"
        className="inline-flex px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-500 dark:from-teal-600 to-cyan-600 dark:to-cyan-700 hover:from-teal-600 dark:hover:from-teal-500 hover:to-cyan-700 dark:hover:to-cyan-600"
      >
        Learn More
      </a>
      <div className="absolute top-0 right-0 pt-4 pr-4">
        <button
          type="button"
          onClick={() => {
            setAdSettings({ ...adSettings, hideMarch2021: true });
          }}
          className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 focus:ring-cyan-500"
        >
          <span className="sr-only">Close</span>
          {/* Heroicon name: outline/x */}
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
