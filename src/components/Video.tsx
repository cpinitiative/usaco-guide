import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Youtube from './markdown/Youtube';
export default function Video(): JSX.Element {
  const [showVideo, setShowVideo] = React.useState(false);
  const data = useStaticQuery(graphql`
    {
      thumbnail: file(relativePath: { eq: "index-video-thumbnail.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 512, quality: 100)
        }
      }
    }
  `);
  return (
    <>
      <div className="relative mx-auto w-full rounded-lg shadow-lg lg:mx-4 xl:mx-8 max-w-[512px]">
        {showVideo && (
          <div className="relative block w-full min-h-32 lg:min-h-64 xl:min-h-80 rounded-lg overflow-hidden focus:outline-none focus:shadow-outline bg-gray-300">
            <Youtube id={'ueNT-w7Oluw'} autoplay />
          </div>
        )}
        {!showVideo && (
          <button
            onClick={() => setShowVideo(true)}
            type="button"
            className="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline text-[0px]"
          >
            {/* We put 0px as text size above since GatsbyImage is inline block, so there's unwanted bottom spacing */}
            <GatsbyImage
              image={data.thumbnail.childImageSharp.gatsbyImageData}
              className="w-full"
              alt="Video by William Lin"
            />

            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <svg
                className="h-20 w-20 text-blue-500"
                fill="currentColor"
                viewBox="0 0 84 84"
              >
                <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
              </svg>
            </div>
          </button>
        )}
      </div>
    </>
  );
}
