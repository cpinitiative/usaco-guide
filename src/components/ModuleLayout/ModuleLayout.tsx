import * as React from 'react';
import Transition from '../Transition';
import { useContext, useRef, useState } from 'react';
// @ts-ignore
import logo from '../../assets/logo.svg';
import { ModuleFrequency, ModuleInfo, ModuleLinkInfo } from '../../module';
import { Link } from 'gatsby';
import ModuleOrdering, {
  divisionLabels,
  isModuleOrderingGroup,
  ModuleOrderingItem,
} from '../../../content/ordering';
import Dots from '../Dots';
import ContactUsSlideover from '../ContactUsSlideover';
import MarkCompleteButton from './MarkCompleteButton';
import ModuleConfetti from './ModuleConfetti';
import Asterisk from '../tooltip/Asterisk';
import Tooltip from '../tooltip/Tooltip';
import TextTooltip from '../tooltip/TextTooltip';
import UserSettingsContext from '../../context/UserSettingsContext';

const Frequency = ({ frequency }: { frequency: ModuleFrequency }) => {
  const textColors = [
    'text-red-600',
    'text-orange-600',
    'text-yellow-600',
    'text-teal-600',
    'text-green-600',
  ];
  const circleColors = [
    'text-red-500',
    'text-orange-500',
    'text-yellow-500',
    'text-teal-500',
    'text-green-500',
  ];
  const labels = [
    'Has Not Appeared',
    'Rare',
    'Not Frequent',
    'Somewhat Frequent',
    'Very Frequent',
  ];
  const hints = [
    'Historically, this module has not appeared in this division before. However, it can still show up in future contests.',
    'Historically, this module has only appeared in this division once or twice.',
    'Historically, this module infrequently appears in this division.',
    'Historically, this module has appeared somewhat frequently for this division.',
    'Historically, this module has been known to appear at least once per contest. However, this does not guarantee that it will show up again in future contests.',
  ];

  return (
    <span
      className={`inline-flex items-center font-medium ${textColors[frequency]}`}
    >
      <Dots count={frequency} totalCount={4} color={circleColors[frequency]} />
      <TextTooltip position="bottom" content={hints[frequency]}>
        {labels[frequency]}
      </TextTooltip>
    </span>
  );
};

const Breadcrumbs = ({
  division,
  module,
}: {
  division: string;
  module: ModuleLinkInfo;
}) => (
  <nav className="flex flex-wrap items-center text-sm leading-loose font-medium">
    <Link
      to="/"
      className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
    >
      Home
    </Link>
    <svg
      className="flex-shrink-0 mx-2 h-5 w-5 text-gray-400"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
    <Link
      to={`/${division}`}
      className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
    >
      {divisionLabels[division]}
    </Link>
    <svg
      className="flex-shrink-0 mx-2 h-5 w-5 text-gray-400"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-gray-500 whitespace-no-wrap">{module.title}</span>
  </nav>
);

const SidebarBottomButtons = ({ onContactUs }) => {
  const languages = {
    cpp: 'C++',
    java: 'Java',
    py: 'Python',
  };
  const nextLang = {
    cpp: 'java',
    java: 'py',
    py: 'cpp',
  };
  const userSettings = useContext(UserSettingsContext);
  return (
    <>
      <div className="flex-shrink-0 border-t border-gray-200 flex">
        <button
          className="group flex-1 flex items-center p-4 text-sm leading-5 font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
          onClick={() =>
            userSettings.setPrimaryLang(nextLang[userSettings.primaryLang])
          }
        >
          <svg
            className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Language: {languages[userSettings.primaryLang]}
        </button>
      </div>
      <div className="flex-shrink-0 border-t border-gray-200 flex">
        <button
          className="group flex-1 flex items-center p-4 text-sm leading-5 font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
          onClick={onContactUs}
        >
          <svg
            className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          Contact Us
        </button>
      </div>
    </>
  );
};

export interface NavLinkGroup {
  label: string;
  children: NavLinkItem[];
}

export type NavLinkItem = ModuleLinkInfo | NavLinkGroup;

export const isNavLinkGroup = (x: NavLinkItem): x is NavLinkGroup =>
  x.hasOwnProperty('label');

const SidebarNavLinks = ({ links }: { links: NavLinkItem[] }) => {
  const renderLink = (link: NavLinkItem) => {
    if (link instanceof ModuleLinkInfo) {
      return (
        <Link
          to={link.url}
          className={`flex items-center px-6 py-3 text-sm leading-5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150`}
          key={link.url}
        >
          {link.title}
        </Link>
      );
    }
    return (
      <div className="bg-gray-100 mb-4" key={link.label}>
        <div
          className={`flex items-center px-6 py-3 text-sm leading-5 font-medium text-gray-600 border-b border-gray-200`}
        >
          {link.label}
        </div>
        {link.children.map(renderLink)}
      </div>
    );
  };
  return <>{links.map(renderLink)}</>;
};

const NavBar = ({
  division,
  module,
  prevModule,
  nextModule,
  alignNavButtonsRight = true,
}: {
  division: any;
  module: ModuleLinkInfo;
  prevModule: ModuleLinkInfo | null;
  nextModule: ModuleLinkInfo | null;
  alignNavButtonsRight?: boolean;
}) => {
  const disabledClasses = 'text-gray-200 pointer-events-none';
  const activeClasses =
    'text-gray-500 hover:text-gray-800 transition duration-150 ease-in-out';
  return (
    <div
      className={`flex ${
        alignNavButtonsRight ? 'sm:justify-between' : 'justify-between'
      }`}
    >
      {alignNavButtonsRight && <div className="flex-1 sm:hidden" />}
      <span className="-ml-4 rounded-md">
        <Link
          to={prevModule === null ? module.url : prevModule.url}
          className={
            'inline-flex items-center px-4 py-2 text-sm leading-5 font-medium rounded-md ' +
            (prevModule === null ? disabledClasses : activeClasses)
          }
        >
          <svg
            className="-ml-0.5 mr-1 h-4 w-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Prev
        </Link>
      </span>
      <div className="hidden sm:flex items-center">
        <Breadcrumbs division={division} module={module} />
      </div>
      <span className="rounded-md -mr-4">
        <Link
          to={nextModule === null ? module.url : nextModule.url}
          className={
            'inline-flex items-center px-4 py-2 text-sm leading-5 font-medium rounded-md ' +
            (nextModule === null ? disabledClasses : activeClasses)
          }
        >
          Next
          <svg
            className="-mr-0.5 ml-1 h-4 w-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </span>
    </div>
  );
};

const flattenNavLinks = (navLinks: NavLinkItem[]) => {
  let links: ModuleLinkInfo[] = [];
  const flatten = (link: NavLinkItem) => {
    if (isNavLinkGroup(link)) {
      link.children.forEach(flatten);
    } else {
      links.push(link);
    }
  };
  navLinks.forEach(flatten);
  return links;
};

export default function ModuleLayout({
  moduleLinks,
  division,
  module,
  children,
}: {
  moduleLinks: { [moduleID: string]: ModuleLinkInfo };
  division: string;
  module: ModuleInfo;
  children: React.ReactNode;
}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isContactUsActive, setIsContactUsActive] = useState(false);
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [moduleProgress, setModuleProgress] = useState('Not Started');

  React.useEffect(() => {
    let progress = window.localStorage.getItem(`progress--${module.id}`);
    if (progress !== null) {
      console.log(progress);
      setModuleProgress(progress);
    }
  }, []);

  const navLinks: NavLinkItem[] = React.useMemo(() => {
    const getLinks = (item: ModuleOrderingItem): NavLinkItem => {
      if (isModuleOrderingGroup(item)) {
        return {
          label: item.name,
          children: item.items.map(getLinks),
        };
      }
      if (!moduleLinks.hasOwnProperty(item)) {
        throw `${item} not found!`;
      }
      return moduleLinks[item];
    };
    return ModuleOrdering[division].map(getLinks);
  }, []);

  const prevModule: ModuleLinkInfo | null = React.useMemo(() => {
    const links = flattenNavLinks(navLinks);
    for (let i = 0; i < links.length - 1; i++) {
      if (links[i + 1].id === module.id) return links[i];
    }
    return null;
  }, [navLinks]);
  const nextModule: ModuleLinkInfo | null = React.useMemo(() => {
    const links = flattenNavLinks(navLinks);
    for (let i = 1; i < links.length; i++) {
      if (links[i - 1].id === module.id) return links[i];
    }
    return null;
  }, [navLinks]);

  const handleCompletionChange = progress => {
    if (moduleProgress === progress) return;
    setModuleProgress(progress);
    window.localStorage.setItem(`progress--${module.id}`, progress);
    if (
      moduleProgress !== 'Complete' &&
      (progress === 'Practicing' || progress === 'Complete')
    )
      setIsConfettiActive(true);
  };

  return (
    <>
      <ModuleConfetti
        show={isConfettiActive}
        onDone={() => setIsConfettiActive(false)}
      />
      <Transition show={isMobileNavOpen} timeout={300}>
        <div className="lg:hidden">
          <div className="fixed inset-0 flex z-40">
            <Transition
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0"
                onClick={() => setIsMobileNavOpen(false)}
              >
                <div className="absolute inset-0 bg-gray-600 opacity-75" />
              </div>
            </Transition>

            <Transition
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                <div className="absolute top-0 right-0 -mr-14 p-1">
                  <button
                    className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                    aria-label="Close sidebar"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <svg
                      className="h-6 w-6 text-white"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <Link className="flex-shrink-0 flex items-center px-4" to="/">
                    <img className="h-12 w-auto" src={logo} alt="USACO Guide" />
                  </Link>
                  <div className="mt-4 px-6">
                    <Breadcrumbs division={division} module={module} />
                  </div>
                  <nav className="mt-6">
                    <SidebarNavLinks links={navLinks} />
                  </nav>
                </div>
                <SidebarBottomButtons
                  onContactUs={() => {
                    setIsMobileNavOpen(false);
                    setIsContactUsActive(true);
                  }}
                />
              </div>
            </Transition>
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </div>
      </Transition>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
          <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <Link className="flex items-center flex-shrink-0 px-4" to="/">
              <img className="h-12 w-auto" src={logo} alt="USACO Guide" />
            </Link>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <nav className="mt-2 flex-1 bg-white">
              <SidebarNavLinks links={navLinks} />
            </nav>
          </div>
          <SidebarBottomButtons
            onContactUs={() => setIsContactUsActive(true)}
          />
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="lg:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 flex items-center">
          <button
            className="flex-shrink-0 -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
            aria-label="Open sidebar"
            onClick={() => setIsMobileNavOpen(true)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex-1 ml-4 mr-4 sm:mr-6">
            <NavBar
              division={division}
              module={module}
              prevModule={prevModule}
              nextModule={nextModule}
            />
          </div>
        </div>
        <main
          className="flex-1 relative z-0 overflow-y-auto sm:pt-2 pb-6 focus:outline-none"
          tabIndex={0}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <div className="hidden lg:block">
                <NavBar
                  division={division}
                  module={module}
                  prevModule={prevModule}
                  nextModule={nextModule}
                />
              </div>
              <div className="px-1.5 lg:mt-8">
                {module.frequency !== null && (
                  <Frequency frequency={module.frequency} />
                )}
              </div>
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    {module.title}
                  </h1>
                  <p className={`text-gray-500`}>Author: {module.author}</p>
                </div>
                <div className="hidden lg:flex-shrink-0 lg:flex ml-4">
                  <MarkCompleteButton
                    state={moduleProgress}
                    onChange={handleCompletionChange}
                  />
                </div>
              </div>
            </div>
            {children}

            <h3 className="text-lg leading-6 font-medium text-gray-900 text-center mb-8 border-t border-gray-200 pt-8">
              <TextTooltip content="You can use this as a way to track your progress throughout this guide.">
                Module Progress
              </TextTooltip>
              :
              <span className="ml-4">
                <MarkCompleteButton
                  onChange={handleCompletionChange}
                  state={moduleProgress}
                  dropdownAbove
                />
              </span>
            </h3>

            <div className="border-t border-gray-200 pt-4">
              <NavBar
                division={division}
                module={module}
                prevModule={prevModule}
                nextModule={nextModule}
                alignNavButtonsRight={false}
              />
            </div>
          </div>
        </main>
      </div>
      <ContactUsSlideover
        isOpen={isContactUsActive}
        onClose={() => setIsContactUsActive(false)}
        activeModule={module}
      />
    </>
  );
}
