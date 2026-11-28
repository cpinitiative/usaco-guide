import type { UiState } from 'instantsearch.js';
import { history } from 'instantsearch.js/es/lib/routers';
import MODULE_ORDERING, {
  SECTION_LABELS,
  SectionID,
} from '../../../content/ordering';

export const indexName = `${process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME ?? 'dev'}_problems`;

type RouteState = Record<string, string | string[] | undefined>;

// URL param <-> refinement attribute for filters that map 1:1
const REFINEMENT_PARAMS: [param: string, attribute: string][] = [
  ['difficulty', 'difficulty'],
  ['modules', 'problemModules.title'],
  ['source', 'source'],
  ['tags', 'tags'],
  ['starred', 'isStarred'],
];

// `sort`, `status` and the contest year bounds are managed by the problems page
// outside of InstantSearch; preserve them when InstantSearch writes the URL.
const EXTERNAL_PARAMS = ['sort', 'status', 'yearFrom', 'yearTo'];

// Section label -> module IDs, matching the Section filter options
const sectionModules: Record<string, string[]> = Object.fromEntries(
  (Object.keys(MODULE_ORDERING) as SectionID[]).map(section => [
    SECTION_LABELS[section],
    MODULE_ORDERING[section].flatMap(chapter => chapter.items),
  ])
);

const toArray = (x: string | string[] | undefined): string[] | undefined =>
  x === undefined ? undefined : Array.isArray(x) ? x : [x];

const stateMapping = {
  stateToRoute(uiState: UiState): RouteState {
    const state = uiState[indexName] ?? {};
    const refinementList = state.refinementList ?? {};
    const route: RouteState = {
      q: state.query || undefined,
      page: state.page && state.page > 1 ? String(state.page) : undefined,
    };
    for (const [param, attribute] of REFINEMENT_PARAMS) {
      const values = refinementList[attribute];
      if (values?.length) route[param] = values;
    }
    // The Section filter refines on module IDs; store section labels instead
    const moduleIds = refinementList['problemModules.id'];
    if (moduleIds?.length) {
      route.section = Object.keys(sectionModules).filter(label =>
        sectionModules[label].every(id => moduleIds.includes(id))
      );
    }
    return route;
  },
  routeToState(routeState: RouteState): UiState {
    const refinementList: Record<string, string[]> = {};
    for (const [param, attribute] of REFINEMENT_PARAMS) {
      const values = toArray(routeState[param]);
      if (values?.length) refinementList[attribute] = values;
    }
    const sections = toArray(routeState.section)?.filter(
      label => sectionModules[label]
    );
    if (sections?.length) {
      // 'null' matches nothing; appended for consistency with Selection,
      // which pushes it onto every array-valued option
      refinementList['problemModules.id'] = [
        ...new Set(sections.flatMap(label => sectionModules[label])),
        'null',
      ];
    }
    return {
      [indexName]: {
        query: typeof routeState.q === 'string' ? routeState.q : undefined,
        page:
          typeof routeState.page === 'string'
            ? Number(routeState.page)
            : undefined,
        refinementList,
      },
    };
  },
};

export function createRouting() {
  return {
    router: history<RouteState>({
      cleanUrlOnDispose: false,
      createURL({ qsModule, routeState, location }) {
        // Preserve page-managed params (sort, status) that InstantSearch
        // doesn't know about
        const current = qsModule.parse(location.search.slice(1), {
          arrayLimit: 99,
        });
        const preserved: RouteState = {};
        for (const param of EXTERNAL_PARAMS) {
          if (current[param]) {
            preserved[param] = current[param] as string | string[];
          }
        }
        const queryString = qsModule.stringify(
          { ...routeState, ...preserved },
          { arrayFormat: 'repeat', addQueryPrefix: true }
        );
        return `${location.protocol}//${location.host}${location.pathname}${queryString}${location.hash}`;
      },
      parseURL({ qsModule, location }) {
        return qsModule.parse(location.search.slice(1), {
          arrayLimit: 99,
        }) as RouteState;
      },
    }),
    stateMapping,
  };
}
