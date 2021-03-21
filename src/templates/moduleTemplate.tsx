import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import Markdown from '../components/markdown/Markdown';
import { SECTION_LABELS } from '../../content/ordering';
import { graphqlToModuleInfo } from '../utils/utils';
import SEO from '../components/seo';
import MarkdownLayout from '../components/MarkdownLayout/MarkdownLayout';
import { useContext } from 'react';
import UserDataContext from '../context/UserDataContext/UserDataContext';
import { Helmet } from 'react-helmet';
import { ConfettiProvider } from '../context/ConfettiContext';
import { MarkdownProblemListsProvider } from '../context/MarkdownProblemListsContext';

export default function Template(props) {
  const { mdx } = props.data; // data.markdownRemark holds your post data
  const { body } = mdx;
  const module = React.useMemo(() => graphqlToModuleInfo(mdx), [mdx]);
  console.log(mdx.fields.problemLists);
  const { setLastViewedModule } = useContext(UserDataContext);
  React.useEffect(() => {
    setLastViewedModule(module.id);
  }, []);

  return (
    <Layout>
      <SEO title={`${module.title}`} description={module.description} />
      <Helmet>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://usaco.guide/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "${SECTION_LABELS[module.section]}",
              "item": "https://usaco.guide/${module.section}"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "${module.title}",
              "item": "https://usaco.guide/${module.section}/${module.id}"
            }]
          }
        `}</script>
      </Helmet>

      <ConfettiProvider>
        <MarkdownProblemListsProvider value={mdx.fields.problemLists}>
          <MarkdownLayout markdownData={module}>
            <div className="py-4">
              <Markdown body={body} />
            </div>
          </MarkdownLayout>
        </MarkdownProblemListsProvider>
      </ConfettiProvider>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(frontmatter: { id: { eq: $id } }) {
      body
      frontmatter {
        title
        author
        id
        prerequisites
        description
        frequency
      }
      parent {
        ... on File {
          name
          relativePath
        }
      }
      fields {
        division
        gitAuthorTime
        problemLists {
          listId
          problems {
            uniqueId
            name
            url
            source
            difficulty
            isStarred
            tags
            solution {
              kind
              label
              labelTooltip
              url
              sketch
            }
          }
        }
      }
      toc {
        cpp {
          depth
          value
          slug
        }
        java {
          depth
          value
          slug
        }
        py {
          depth
          value
          slug
        }
      }
    }
  }
`;
