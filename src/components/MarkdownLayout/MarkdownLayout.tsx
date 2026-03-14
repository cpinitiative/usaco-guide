import * as React from "react";
import { useContext, useState } from "react";
import {
  moduleIDToSectionMap,
  moduleIDToURLMap,
} from "../../../content/ordering";
import ConfettiContext from "../../context/ConfettiContext";
import { ContactUsSlideoverProvider } from "../../context/ContactUsSlideoverContext";
import MarkdownLayoutContext from "../../context/MarkdownLayoutContext";
import { ProblemSolutionContext } from "../../context/ProblemSolutionContext";
import { ProblemSuggestionModalProvider } from "../../context/ProblemSuggestionModalContext";
import { useUserLangSetting } from "../../context/UserDataContext/properties/simpleProperties";
import {
  useSetProgressOnModule,
  useUserProgressOnModules,
} from "../../context/UserDataContext/properties/userProgress";
import { ModuleInfo } from "../../models/module";
import { SolutionInfo } from "../../models/solution";
import ForumCTA from "../ForumCTA";
import DesktopSidebar from "./DesktopSidebar";
import MobileAppBar from "./MobileAppBar";
import MobileSideNav from "./MobileSideNav";
import ModuleHeaders from "./ModuleHeaders/ModuleHeaders";
import ModuleProgressUpdateBanner from "./ModuleProgressUpdateBanner";
import NavBar from "./NavBar";
import NotSignedInWarning from "./NotSignedInWarning";
import TableOfContentsBlock from "./TableOfContents/TableOfContentsBlock";
import TableOfContentsSidebar from "./TableOfContents/TableOfContentsSidebar";
import { MdxContent } from "../../lib/loadContent";
import { MdxFrontmatter } from "../../types/content";

const ContentContainer = ({ children, tableOfContents }) => (
  <main
    className="relative overflow-x-hidden pt-6 focus:outline-hidden lg:pt-2"
    tabIndex={0}
  >
    <div className="mx-auto">
      <div className="flex justify-center">
        {/* Placeholder for the sidebar */}
        <div
          className="order-1 hidden shrink-0 lg:block"
          style={{ width: "20rem" }}
        />
        {tableOfContents.length > 1 && (
          <div className="order-3 mt-48 mr-6 ml-6 hidden w-64 shrink-0 2xl:block">
            <TableOfContentsSidebar tableOfContents={tableOfContents} />
          </div>
        )}
        <div className="order-2 w-0 max-w-4xl min-w-0 flex-1 overflow-x-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block">
            <NavBar />
            <div className="h-8" />
          </div>

          {children}

          <div className="pt-4 pb-6">
            <NavBar alignNavButtonsRight={false} />
          </div>
        </div>
      </div>
    </div>
  </main>
);

interface MarkdownLayoutProps {
  frontmatter: MdxFrontmatter[];
  children: React.ReactNode;
  markdownData: ModuleInfo | SolutionInfo;
}

export default function MarkdownLayout({
  markdownData,
  children,
  frontmatter,
}: MarkdownLayoutProps) {
  const userProgressOnModules = useUserProgressOnModules();
  const setModuleProgress = useSetProgressOnModule();
  const lang = useUserLangSetting();

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const moduleProgress =
    (userProgressOnModules && userProgressOnModules[markdownData.id]) ||
    "Not Started";

  const tableOfContents =
    lang in markdownData.toc ? markdownData.toc[lang] : markdownData.toc["cpp"];

  const moduleLinks = React.useMemo(() => {
    return frontmatter.map((cur) => ({
      id: cur.id,
      title: cur.title,
      section: moduleIDToSectionMap[cur.id],
      url: moduleIDToURLMap[cur.id],
      cppOc: null,
      javaOc: null,
      pyOc: null,
    }));
  }, [frontmatter]);
  const showConfetti = useContext(ConfettiContext);
  const handleCompletionChange = (progress) => {
    if (moduleProgress === progress) return;
    setModuleProgress(markdownData.id, progress);
    if (
      moduleProgress !== "Complete" &&
      (progress === "Practicing" || progress === "Complete")
    ) {
      showConfetti!();
    }
  };

  // problemSolutionContext is null when markdownData is a ModuleInfo
  const problemSolutionContext = useContext(ProblemSolutionContext);
  let activeIDs: string[] = [];
  if (markdownData instanceof ModuleInfo) {
    activeIDs.push(markdownData.id);
  } else {
    activeIDs = problemSolutionContext!.modulesThatHaveProblem.map((x) => x.id);
  }

  return (
    <MarkdownLayoutContext.Provider
      value={{
        markdownLayoutInfo: markdownData,
        sidebarLinks: moduleLinks,
        activeIDs,
        uniqueID: null, // legacy, remove when classes is removed
        isMobileNavOpen,
        setIsMobileNavOpen,
        moduleProgress,
        handleCompletionChange,
      }}
    >
      <ContactUsSlideoverProvider>
        <ProblemSuggestionModalProvider>
          <MobileSideNav />
          <DesktopSidebar />

          <div className="w-full">
            <MobileAppBar />

            <ContentContainer tableOfContents={tableOfContents}>
              <NotSignedInWarning />

              <ModuleHeaders moduleLinks={moduleLinks} />

              <div className={tableOfContents.length > 1 ? "2xl:hidden" : ""}>
                <TableOfContentsBlock tableOfContents={tableOfContents} />
              </div>

              {children}

              <ModuleProgressUpdateBanner />

              <ForumCTA />

              {/*<div className="my-8">*/}
              {/*  <ModuleFeedback markdownData={markdownData} />*/}
              {/*</div>*/}
            </ContentContainer>
          </div>
        </ProblemSuggestionModalProvider>
      </ContactUsSlideoverProvider>
    </MarkdownLayoutContext.Provider>
  );
}
