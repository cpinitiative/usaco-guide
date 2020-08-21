import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

// note: cows will be unlocked in reverse order

const PhotoCard = ({ img, day, hiddenUntilTomorrow, hiddenOnDesktop }) => (
  <div
    className={
      'bg-white shadow sm:rounded-lg overflow-hidden flex flex-col' +
      (hiddenOnDesktop ? ' lg:hidden' : '')
    }
  >
    <div className="px-4 pt-5 sm:px-6 sm:pt-6 pb-4">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Day {day} Photo
      </h3>
    </div>
    <div className="overflow-hidden relative">
      {hiddenUntilTomorrow && (
        <div className="absolute inset-0 text-center flex items-center justify-center text-black font-medium bg-white bg-opacity-25 z-10">
          Come back tomorrow to unlock this cow photo!
        </div>
      )}
      <Img
        className="w-full object-cover"
        fluid={img}
        alt="Cow"
        style={hiddenUntilTomorrow ? { filter: 'blur(60px)' } : null}
      />
    </div>
  </div>
);

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
  return (
    <>
      <div className="bg-white shadow sm:rounded-lg overflow-hidden lg:col-span-2">
        <div className="px-4 py-5 sm:p-6">
          <div className="text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              🔥 {streak} Day Streak: Keep it up!
            </h3>
            <div className="mt-3 text-sm leading-5 text-gray-500 space-y-1">
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

      <div className="space-y-8">
        {cows.map((value, index) => {
          const need = cows.length - index;
          const photoNumber = streak - need;
          if (photoNumber >= 0) {
            return (
              <PhotoCard
                img={cows[index]}
                day={need + 1}
                hiddenOnDesktop={photoNumber % 2 === 1}
                hiddenUntilTomorrow={need === streak}
              />
            );
          }
          return null;
        })}
      </div>

      <div className="space-y-8 hidden lg:block">
        {cows.map((value, index) => {
          const need = cows.length - index;
          const photoNumber = streak - need;
          if (photoNumber % 2 === 1 && photoNumber >= 0) {
            return (
              <PhotoCard
                img={cows[index]}
                day={need + 1}
                hiddenOnDesktop={false}
                hiddenUntilTomorrow={need === streak}
              />
            );
          }
          return null;
        })}
      </div>
    </>
  );
}
