
// https://codeforces.com/apiHelp/objects#Problem
export interface CFProblem {
  contestId?: number;
  problemsetName?: string;
  index: string;
  name: string;
  type: 'PROGRAMMING' | 'QUESTION';
  points?: number;
  rating?: number;
  tags: string[];
}

// https://codeforces.com/apiHelp
export interface CFResponse {
  status: 'OK' | 'FAILED';
  comment?: string; // if FAILED
  result?: unknown; // if OKAY
}

// https://codeforces.com/apiHelp/methods#problemset.problems
export interface CFProblemsetResponse extends CFResponse {
  result?: {
    problems: CFProblem[];
    // problemStatistics: CFProblemStatistics[]; not typed yet as we don't need it
  };
}

// https://codeforces.com/apiHelp/methods#contest.standings
export interface CFContestStandingsResponse extends CFResponse {
  result?: {
    // contest: CFContest; not typed yet as we don't need it
    problems: CFProblem[];
    // rows: CFRankListRows[]; not typed yet as we don't need it
  };
}