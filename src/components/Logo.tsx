import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default function Logo(props) {
  const data = useStaticQuery(graphql`
    query {
      dark: file(relativePath: { eq: "logo_dark.png" }) {
        childImageSharp {
          fixed(height: 36, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      light: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 36, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return props.noDarkMode ? (
    <Img
      fixed={data.light.childImageSharp.fixed}
      alt="USACO Guide"
      {...props}
    />
  ) : (
    <>
      <div className="dark:hidden">
        <Img
          fixed={data.light.childImageSharp.fixed}
          alt="USACO Guide"
          {...props}
        />
      </div>
      <div className="hidden dark:block">
        <Img
          fixed={data.dark.childImageSharp.fixed}
          alt="USACO Guide"
          {...props}
        />
      </div>
    </>
  );
}
