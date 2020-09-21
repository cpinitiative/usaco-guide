import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';
import YouTube from 'react-youtube';
export default function Video() {
  const [showVideo, setShowVideo] = React.useState(false);
  const data = useStaticQuery(graphql`
    query {
      thumbnail: file(relativePath: { eq: "index-video-thumbnail.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <>
      <div className="relative mx-auto w-full rounded-lg shadow-lg lg:mx-4 xl:mx-8">
        {showVideo && (
          <div className="relative block w-full min-h-32 lg:min-h-64 xl:min-h-80 rounded-lg overflow-hidden focus:outline-none focus:shadow-outline bg-gray-300">
            <YouTube
              className={''}
              opts={{
                width: '100%',
                height: '350px',
                playerVars: {
                  autoplay: 1,
                  rel: 0,
                },
              }}
              videoId={'ueNT-w7Oluw'}
            />
          </div>
        )}
        {!showVideo && (
          <button
            onClick={() => setShowVideo(true)}
            type="button"
            className="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline"
          >
            <Img
              className="w-full"
              fluid={data.thumbnail.childImageSharp.fluid}
              alt="Video by William Lin"
            />

            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <svg
                className="h-20 w-20 text-indigo-500"
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
