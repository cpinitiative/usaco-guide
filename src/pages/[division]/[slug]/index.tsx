import * as React from "react";
import { useEffect } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../../components/layout";
import Markdown from "../../../components/markdown/Markdown";
import SEO from "../../../components/seo";
import { useIsUserDataLoaded } from "../../../context/UserDataContext/UserDataContext";
import { graphqlToModuleInfo } from "../../../utils/utils";
import { MarkdownProblemListsProvider } from "../../../context/MarkdownProblemListsContext";
import {
  MdxContent,
  MdxFrontmatter,
  ModuleProblemLists,
} from "../../../types/content";
import MarkdownLayout from "../../../components/MarkdownLayout/MarkdownLayout";
import Head from "next/head";
import { SECTION_LABELS } from "../../../../content/ordering";
import { ConfettiProvider } from "../../../context/ConfettiContext";

interface ModulePageProps {
  moduleData: MdxContent;
  moduleProblemLists?: ModuleProblemLists;
  frontmatter: MdxFrontmatter[];
}

export default function ModuleTemplate({
  moduleData,
  moduleProblemLists,
  frontmatter,
}: ModulePageProps): JSX.Element {
  const moduleInfo = React.useMemo(
    () => graphqlToModuleInfo(moduleData),
    [moduleData],
  );
  const isLoaded = useIsUserDataLoaded();

  useEffect(() => {
    // Handle hash-based scrolling
    const { hash } = window.location;
    if (!hash) return;
    if (!isLoaded) return;

    window.requestAnimationFrame(() => {
      try {
        const anchor = document.getElementById(hash.substring(1));
        if (!anchor) throw new Error(`The anchor "${hash}" doesn't exist`);
        const offset = anchor.getBoundingClientRect().top + window.scrollY;
        window.scroll({ top: offset, left: 0 });
      } catch (e) {
        console.error(e);
      }
    });
  }, [isLoaded]);

  if (!moduleData) {
    return <div>Loading...</div>;
  }

  return (
    <Layout setLastViewedModule={moduleInfo.id}>
      <SEO title={`${moduleInfo.title}`} description={moduleInfo.description} />
      <Head>
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
              "name": "${SECTION_LABELS[moduleInfo.section]}",
              "item": "https://usaco.guide/${moduleInfo.section}"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "${moduleInfo.title}",
              "item": "https://usaco.guide/${moduleInfo.section}/${
                moduleInfo.id
              }"
            }]
          }
        `}</script>
      </Head>
      <div className="py-4">
        <ConfettiProvider>
          <MarkdownProblemListsProvider
            value={moduleProblemLists?.problemLists}
          >
            <MarkdownLayout markdownData={moduleInfo} frontmatter={frontmatter}>
              <Markdown body={moduleData.body} />
            </MarkdownLayout>
          </MarkdownProblemListsProvider>
        </ConfettiProvider>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Load all modules to generate paths
  const { queryAllModuleFrontmatter } = await import(
    "../../../lib/queryContent"
  );
  const data = await queryAllModuleFrontmatter();
  const paths = data
    .map(({ division, frontmatter }) => {
      return {
        params: {
          division,
          slug: frontmatter.id, // Handle nested paths in slug
        },
      };
    })
    .filter(Boolean); // Remove any null entries

  return {
    paths,
    fallback: false, // or 'blocking' if you want to enable fallback behavior
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { queryModule, queryModuleProblemsLists, queryAllModuleFrontmatter } =
      await import("../../../lib/queryContent");
    const { division, slug } = context.params as {
      division: string;
      slug: string;
    };
    if (!division || !slug) {
      console.error("Missing division or slug in params");
      return { notFound: true };
    }
    const mod = await queryModule(slug);
    if (!mod) {
      console.error(`Module not found for slug: ${slug}`);
      return { notFound: true };
    }
    const frontmatterData = await queryAllModuleFrontmatter();
    if (!frontmatterData) {
      console.error("No module frontmatter found");
      return { notFound: true };
    }
    const moduleProblemLists = await queryModuleProblemsLists(slug);
    return {
      props: {
        moduleData: mod,
        moduleProblemLists: moduleProblemLists ?? null,
        frontmatter: frontmatterData.map((x) => x.frontmatter),
      },
    };
  } catch (error) {
    console.error(`Error loading module in getStaticProps:`, error);
    return { notFound: true };
  }
};
