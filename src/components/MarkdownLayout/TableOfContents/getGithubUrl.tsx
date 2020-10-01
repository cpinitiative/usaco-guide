import MarkdownLayoutContext from '../../../context/MarkdownLayoutContext';
import { useContext, useRef, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function getGithubUrl() {
  const moduleLayoutInfo = useContext(MarkdownLayoutContext);
  const id = moduleLayoutInfo.markdownLayoutInfo.id;
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              id
            }
            fields {
              division
            }
            parent {
              ... on File {
                name
                relativePath
              }
            }
          }
        }
      }
    }
  `);
  const edges = data['allMdx']['edges'];
  let relativePath = '';
  for (let i = 0; i < edges.length; ++i) {
    const node = edges[i]['node'];
    if (node['frontmatter']['id'] == id) {
      relativePath = node['parent']['relativePath'];
    }
  }
  let githubUrl = 'https://github.com/cpinitiative/usaco-guide/blob/master/';
  if (relativePath == '') {
  } else if (/\d_.*/.test(relativePath)) {
    githubUrl += 'content/' + relativePath;
  } else {
    githubUrl += 'solutions/' + relativePath;
  }
  githubUrl = githubUrl.replace(' ', '%20');
  return githubUrl;
}
