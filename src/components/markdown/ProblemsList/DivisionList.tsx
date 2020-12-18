import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { graphqlToModuleLinks } from '../../../utils/utils';
import div_to_probs from './div_to_probs';
import { Problem } from '../../../../content/models';
import { ProblemsList } from './ProblemsList';

export function DivisionList(props) {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/" } }) {
        edges {
          node {
            frontmatter {
              title
              id
            }
            fields {
              division
            }
            problems {
              uniqueID
              solID
            }
          }
        }
      }
    }
  `);
  const moduleLinks = React.useMemo(() => graphqlToModuleLinks(data.allMdx), [
    data.allMdx,
  ]);
  const prob_to_link = {};
  for (let moduleLink of moduleLinks) {
    for (let problem of moduleLink.probs) {
      const uniqueID = problem.uniqueID;
      prob_to_link[uniqueID] = moduleLink.url + '/#problem-' + uniqueID;
    }
  }
  const yearToProbs: { [key: string]: Problem[] } = {};
  let division = props.division;
  //   console.log("WHOOPS",division)
  //   console.log(div_to_probs[division])
  for (let prob_info of div_to_probs[division]) {
    const uniqueID =
      'http://www.usaco.org/index.php?page=viewproblem2&cpid=' + prob_info[0];
    const prob = new Problem(
      prob_info[1], // source
      prob_info[2], // title
      uniqueID,
      null,
      null,
      null,
      prob_to_link[uniqueID] || '//'
    );
    let year = +prob_info[1].substring(0, 4);
    if (prob_info[1].includes('December')) {
      year++;
    }
    if (!(year in yearToProbs)) {
      yearToProbs[year] = [];
    }
    yearToProbs[year].push(prob);
  }
  console.log('KEY SET', Object.keys(yearToProbs));
  //   const probs: Problem[] = []
  return (
    <>
      {Object.keys(yearToProbs)
        .sort()
        .reverse()
        .map(key => (
          <>
            <h2>
              {+key - 1} - {key}
            </h2>
            <ProblemsList problems={yearToProbs[key]} divisionTable />
          </>
        ))}
    </>
  );
}
