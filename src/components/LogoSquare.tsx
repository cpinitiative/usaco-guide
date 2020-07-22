import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';

export default function LogoSquare(props) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-square.png" }) {
        childImageSharp {
          fixed(height: 40, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Img fixed={data.file.childImageSharp.fixed} alt="USACO Guide" {...props} />
  );
}
