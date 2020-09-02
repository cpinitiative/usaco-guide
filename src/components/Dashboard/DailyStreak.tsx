import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { useContext } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';

// note: cows will be unlocked in reverse order

const ComeBackTimer = ({ tomorrowMilliseconds }) => {
  const [milliseconds, setMilliseconds] = React.useState(tomorrowMilliseconds);

  React.useEffect(() => {
    let interval = setInterval(() => {
      setMilliseconds(tomorrowMilliseconds - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(milliseconds / 1000 / 60 / 60);
  const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
  const seconds = Math.floor((milliseconds / 1000) % 60);

  return (
    <div>
      Come back in
      <p className="text-2xl my-2">
        {hours} hours {minutes} minutes {seconds} seconds
      </p>{' '}
      to unlock this cow photo!
    </div>
  );
};

const PhotoCard = ({ img, day, tomorrowMilliseconds, hiddenOnDesktop }) => {
  return (
    <div className={'mb-8' + (hiddenOnDesktop ? ' lg:hidden' : '')}>
      <div className="bg-white dark:bg-gray-900 shadow sm:rounded-lg overflow-hidden flex flex-col">
        <div className="px-4 pt-5 sm:px-6 sm:pt-6 pb-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-dark-high-emphasis">
            Day {day} Photo
          </h3>
        </div>
        <div className="overflow-hidden relative">
          {tomorrowMilliseconds >= 0 ? (
            <div className="absolute inset-0 text-center flex items-center justify-center text-black font-medium bg-white dark:bg-black dark:text-white bg-opacity-25 dark:bg-opacity-25 z-10 p-4">
              <ComeBackTimer tomorrowMilliseconds={tomorrowMilliseconds} />
            </div>
          ) : null}
          <Img
            className="w-full object-cover"
            fluid={img}
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
    query {
      allFile(
        filter: { relativePath: { regex: "/^cows/.*/" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      }
    }
  `);
  const cows = React.useMemo(() => {
    return data.allFile.edges
      .map(({ node }) => node.childImageSharp.fluid)
      .reverse();
  }, []);
  const { lastVisitDate } = useContext(UserDataContext);
  const tomorrowMilliseconds = lastVisitDate + 1000 * 60 * 60 * 20;
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
                Each day you visit, you'll unlock a new cow photo (until we run
                out). If you break the streak, the cow photos will disappear!!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        {cows.map((value, index) => {
          const need = cows.length - index;
          const photoNumber = streak - need;
          if (photoNumber >= 0) {
            return (
              <PhotoCard
                key={index}
                img={cows[index]}
                day={need + 1}
                hiddenOnDesktop={photoNumber % 2 === 1}
                tomorrowMilliseconds={
                  need === streak ? tomorrowMilliseconds : -1
                }
              />
            );
          }
          return null;
        })}
      </div>

      <div className="hidden lg:block">
        {cows.map((value, index) => {
          const need = cows.length - index;
          const photoNumber = streak - need;
          if (photoNumber % 2 === 1 && photoNumber >= 0) {
            return (
              <PhotoCard
                key={index}
                img={cows[index]}
                day={need + 1}
                hiddenOnDesktop={false}
                tomorrowMilliseconds={
                  need === streak ? tomorrowMilliseconds : -1
                }
              />
            );
          }
          return null;
        })}
      </div>
    </>
  );
}
