import { graphql } from 'gatsby';
import * as React from 'react';
import { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { SECTION_LABELS } from '../../content/ordering';
import Layout from '../components/layout';
import Markdown from '../components/markdown/Markdown';
import MarkdownLayout from '../components/MarkdownLayout/MarkdownLayout';
import SEO from '../components/seo';
import { ConfettiProvider } from '../context/ConfettiContext';
import { MarkdownProblemListsProvider } from '../context/MarkdownProblemListsContext';
import UserDataContext from '../context/UserDataContext/UserDataContext';
import { graphqlToModuleInfo } from '../utils/utils';

export default function Template(props): JSX.Element {
  const { xdm, moduleProblemLists } = props.data; // data.markdownRemark holds your post data
  const { body } = xdm;
  const module = React.useMemo(() => graphqlToModuleInfo(xdm), [xdm]);
  const { isLoaded, setLastViewedModule } = useContext(UserDataContext);
  React.useEffect(() => {
    setLastViewedModule(module.id);
  }, []);

  useEffect(() => {
    // source: https://miguelpiedrafita.com/snippets/scrollToHash
    const { hash } = location;
    if (!hash) return;
    window.requestAnimationFrame(() => {
      try {
        const anchor = document.getElementById(hash.substring(1));
        const offset = anchor.getBoundingClientRect().top + window.scrollY;
        window.scroll({ top: offset, left: 0 });
      } catch (e) {
        console.error(e);
      }
    });
  }, [isLoaded]);

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
        <MarkdownProblemListsProvider
          value={moduleProblemLists?.problemLists || []}
        >
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
  query ($id: String!) {
    xdm(frontmatter: { id: { eq: $id } }) {
      body
      frontmatter {
        title
        author
        contributors
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
    moduleProblemLists(moduleId: { eq: $id }) {
      problemLists {
        listId
        problems {
          uniqueId
          name
          url
          source
          sourceDescription
          difficulty
          isStarred
          tags
          solution {
            kind
            label
            labelTooltip
            url
            hasHints
            sketch
          }
        }
      }
    }
  }
`;
