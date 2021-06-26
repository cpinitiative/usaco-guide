import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { useContext, useState } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';

// note: cows will be unlocked in lexicographical order

const ComeBackTimer = ({ tomorrowMilliseconds }) => {
  const [milliseconds, setMilliseconds] = React.useState(
    tomorrowMilliseconds - Date.now()
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMilliseconds(tomorrowMilliseconds - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(milliseconds / 1000 / 60 / 60 / 24);
  const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
  const seconds = Math.floor((milliseconds / 1000) % 60);

  return (
    <div>
      Come back in
      <p className="text-2xl my-2">
        {hours} hours {minutes} minutes {seconds} seconds
      </p>
      to {days ? 'continue your streak' : 'unlock this cow photo'}!
      {days ? ` Photo will be unlocked after ${days + 1} days.` : null}
    </div>
  );
};

const PhotoCard = ({ img, day, tomorrowMilliseconds, hiddenOnDesktop }) => {
  return (
    <div
      className={
        'max-w-[592px] mx-auto mb-8' + (hiddenOnDesktop ? ' lg:hidden' : '')
      }
    >
      <div className="bg-white dark:bg-gray-900 shadow sm:rounded-lg overflow-hidden flex flex-col">
        <div className="px-4 pt-5 sm:px-6 sm:pt-6 pb-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-dark-high-emphasis">
            Day {day} Photo
          </h3>
        </div>
        {/* We set text size to 0px because GatsbyImage is inline block. Without it, there's extra space after the image. */}
        <div className="overflow-hidden relative text-[0px]">
          {tomorrowMilliseconds >= 0 ? (
            <div className="text-base absolute inset-0 text-center flex items-center justify-center text-black font-medium bg-white dark:bg-black dark:text-white bg-opacity-25 dark:bg-opacity-25 z-10 p-4">
              <ComeBackTimer tomorrowMilliseconds={tomorrowMilliseconds} />
            </div>
          ) : null}
          <GatsbyImage
            image={img}
            className="w-full object-cover"
            alt="Cow"
            style={tomorrowMilliseconds >= 0 ? { filter: 'blur(60px)' } : null}
          />
        </div>
      </div>
    </div>
  );
};

export default function DailyStreak({ streak }) {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativePath: { regex: "/^cows/.*/" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED, width: 592)
            }
            name
          }
        }
      }
    }
  `);
  // https://www.digitalocean.com/community/tutorials/react-usememo
  const cows = React.useMemo(() => {
    return data.allFile.edges.map(
      ({ node }) => node.childImageSharp.gatsbyImageData
    );
  }, []);
  const { lastVisitDate } = useContext(UserDataContext);

  // we don't want to render streaks during Server-Side Generation
  const [firstRender, setFirstRender] = useState(true);
  React.useEffect(() => {
    setFirstRender(false);
  }, []);
  if (firstRender) return null;

  const generatePrimes = (): number[] => {
    const primes: number[] = [];
    for (let i = 2; primes.length < cows.length; ++i) {
      let composite = false;
      for (let j = 2; j * j <= i; ++j) if (i % j == 0) composite = true;
      if (!composite) primes.push(i);
    }
    return primes;
  };
  const times = generatePrimes();

  let maxInd = 0;
  while (maxInd < times.length && times[maxInd] <= streak) maxInd++;
  const getComponent = (i, hideYesNo): React.ReactElement => {
    if (times[i] <= streak) {
      return (
        <PhotoCard
          key={i}
          img={cows[i]}
          day={times[i]}
          hiddenOnDesktop={hideYesNo}
          tomorrowMilliseconds={-1}
        />
      );
    }
    if (i == times.length) {
      return (
        <div className="mb-8" key={times.length}>
          <div className="bg-white dark:bg-gray-900 shadow sm:rounded-lg overflow-hidden flex flex-col">
            <div className="px-4 py-5 sm:p-6">
              <div className="text-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-dark-high-emphasis">
                  You've ran out of cow photos!
                </h3>
                <div className="mt-3 text-sm leading-5 text-gray-500 dark:text-dark-med-emphasis space-y-1">
                  Seeing that you're addicted to USACO Guide, you should
                  definitely reach out to us regarding{' '}
                  <a
                    href="/general/contributing"
                    className="font-bold text-blue-500"
                  >
                    contributing
                  </a>
                  !
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <PhotoCard
          key={i}
          img={cows[i]}
          day={times[i]}
          hiddenOnDesktop={hideYesNo}
          tomorrowMilliseconds={
            lastVisitDate +
            1000 * 60 * 60 * 20 +
            1000 * 60 * 60 * 24 * (times[i] - streak - 1)
          }
        />
      );
    }
  };
  const leftCows = () => {
    // 2-column format for desktop, so hide every other cow
    const items = [];
    for (let i = maxInd; i >= 0; --i) {
      items.push(getComponent(i, (maxInd - i) % 2 == 1));
    }
    return items;
  };
  const rightCows = () => {
    // desktop-only
    const items = [];
    for (let i = maxInd - 1; i >= 0; i -= 2) {
      items.push(getComponent(i, false));
    }
    return items;
  };
  return (
    <>
      <div className="bg-white dark:bg-gray-900 shadow sm:rounded-lg overflow-hidden lg:col-span-2">
        <div className="px-4 py-5 sm:p-6">
          <div className="text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-dark-high-emphasis">
              🔥 {streak} Day Streak: Keep it up!
            </h3>
            <div className="mt-3 text-sm leading-5 text-gray-500 dark:text-dark-med-emphasis space-y-1">
              <p>
                You've visited this guide for {streak} consecutive day
                {streak !== 1 && 's'}.
              </p>
              <p>
                Each (prime) day you visit, you'll unlock a new cow photo (until
                we run out). If you break the streak, the cow photos will
                disappear!!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>{leftCows()}</div>
      <div className="hidden lg:block">{rightCows()}</div>
    </>
  );
}
