import divToProbs from '../markdown/ProblemsList/DivisionList/div_to_probs.json';

// div_to_probs.json holds, per division, [USACO problem id, contest, name]
// triples. The contest is the same string shown as "Contest: 2020 January" on
// each hit, and always starts with the four-digit year.
const contestYearByProblemId = new Map<string, number>();
for (const problems of Object.values(divToProbs)) {
  for (const [id, contest] of problems) {
    const year = Number(contest.slice(0, 4));
    if (!Number.isNaN(year)) contestYearByProblemId.set(`usaco-${id}`, year);
  }
}

/** Every USACO contest year, ascending. */
export const CONTEST_YEARS = [...new Set(contestYearByProblemId.values())].sort(
  (a, b) => a - b
);

/**
 * IDs of the USACO problems whose contest falls within [from, to]; a null bound
 * is open-ended. Non-USACO problems have no contest year, so they never match.
 */
export function usacoProblemIdsInYearRange(
  from: number | null,
  to: number | null
): Set<string> {
  const ids = new Set<string>();
  for (const [id, year] of contestYearByProblemId) {
    if ((from === null || year >= from) && (to === null || year <= to)) {
      ids.add(id);
    }
  }
  return ids;
}
