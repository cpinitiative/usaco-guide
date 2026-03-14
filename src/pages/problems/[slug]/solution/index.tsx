import * as React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import {
  MdxContent,
  MdxFrontmatter,
  ProblemInfo,
} from "../../../../types/content";
import { SolutionInfo } from "../../../../models/solution";
import Layout from "../../../../components/layout";
import SEO from "../../../../components/seo";
import { ConfettiProvider } from "../../../../context/ConfettiContext";
import { ProblemSolutionContext } from "../../../../context/ProblemSolutionContext";
import MarkdownLayout from "../../../../components/MarkdownLayout/MarkdownLayout";
import Markdown from "../../../../components/markdown/Markdown";

interface SolutionTemplateProps {
  solutionForSlug: MdxContent;
  modulesThatHaveProblem: {
    id: string;
    title: string;
  }[];
  problemInfo: ProblemInfo;
  frontmatter: MdxFrontmatter[];
}

export default function SolutionTemplate({
  solutionForSlug,
  modulesThatHaveProblem,
  problemInfo,
  frontmatter,
}: SolutionTemplateProps) {
  const markdownData = React.useMemo(() => {
    return new SolutionInfo(
      solutionForSlug.frontmatter.id,
      solutionForSlug.frontmatter.source,
      `${solutionForSlug.frontmatter.source} - ${solutionForSlug.frontmatter.title}`,
      solutionForSlug.frontmatter.author,
      solutionForSlug.frontmatter.contributors ?? null,
      solutionForSlug.toc,
      solutionForSlug.fileAbsolutePath,
    );
  }, [solutionForSlug]);

  const problem = {
    url: problemInfo.url,
    uniqueId: problemInfo.uniqueId,
  };

  return (
    <Layout>
      <SEO
        title={`Solution - ${solutionForSlug.frontmatter.title} (${solutionForSlug.frontmatter.source})`}
      />

      <ConfettiProvider>
        <ProblemSolutionContext.Provider
          value={{
            modulesThatHaveProblem,
            problem,
          }}
        >
          <MarkdownLayout markdownData={markdownData} frontmatter={frontmatter}>
            <div className="py-4">
              <Markdown body={solutionForSlug.body} />
            </div>
          </MarkdownLayout>
        </ProblemSolutionContext.Provider>
      </ConfettiProvider>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { queryProblemSlugsForSolutionsIds } = await import(
      "../../../../lib/queryContent"
    );
    const paths = (await queryProblemSlugsForSolutionsIds()).map((slug) => ({
      params: {
        slug: slug.startsWith('/problems/') ? slug.substring('/problems/'.length) : slug
      },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error loading problem file paths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const {
      querySolutionByProblemSlug,
      queryModuleIdAndTitleFromProblemBySolutionId,
      queryProblem,
      queryAllModuleFrontmatter,
    } = await import("../../../../lib/queryContent");
    const { slug } = context.params as {
      slug: string;
    };

    // The database stores full paths like /problems/usaco-xxx, but Next.js routes pass just the slug
    const fullSlug = slug.startsWith('/problems/') ? slug : `/problems/${slug}`;
    const solutionForSlug = await querySolutionByProblemSlug(fullSlug);
    if (!solutionForSlug) {
      console.error(`Solution not found for slug: ${slug}`);
      return {
        notFound: true,
      };
    }
    const modulesThatHaveProblem =
      await queryModuleIdAndTitleFromProblemBySolutionId(
        solutionForSlug.frontmatter.id,
      );
    if (!modulesThatHaveProblem) {
      console.error(
        `Problems not found for solution id: ${solutionForSlug.frontmatter.id}`,
      );
      return {
        notFound: true,
      };
    }

    const problemInfo = await queryProblem(solutionForSlug.frontmatter.id);
    if (!problemInfo) {
      console.error(
        `Problem not found for solution id: ${solutionForSlug.frontmatter.id}`,
      );
      return {
        notFound: true,
      };
    }
    const loadedModuleFrontmatter = await queryAllModuleFrontmatter();
    if (!loadedModuleFrontmatter) {
      console.error("Failed to load module frontmatter");
      return {
        notFound: true,
      };
    }
    return {
      props: {
        solutionForSlug,
        modulesThatHaveProblem,
        problemInfo,
        frontmatter: loadedModuleFrontmatter.map(
          (module) => module.frontmatter,
        ),
      },
    };
  } catch (error) {
    console.error("Error loading problem file paths:", error);
    return {
      notFound: true,
    };
  }
};
