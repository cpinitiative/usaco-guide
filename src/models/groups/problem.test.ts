import { describe, expect, it } from 'vitest';
import {
  getSubmissionEarnedPoints,
  getEarnedPointsForProblem,
  verdictToSymbol,
  submissionTextColor,
  submissionCircleColor,
  submissionCircleBorderColor,
} from './problem';

const problem = { points: 10 } as any;

describe('getSubmissionEarnedPoints', () => {
  it('multiplies score by points', () => {
    expect(getSubmissionEarnedPoints({ score: 0.5, timestamp: 0 } as any, problem)).toBe(5);
  });

  it('rounds to 1 decimal', () => {
    expect(getSubmissionEarnedPoints({ score: 0.333, timestamp: 0 } as any, problem)).toBe(3.3);
  });
});

describe('getEarnedPointsForProblem', () => {
  it('returns 0 for empty submissions', () => {
    expect(getEarnedPointsForProblem(problem, [])).toBe(0);
  });

  it('ignores pending submissions', () => {
    const subs = [{ score: 1, verdict: 'AC' }, { score: 0.5, verdict: 'Pending' }] as any[];
    expect(getEarnedPointsForProblem(problem, subs)).toBe(10);
  });

  it('takes max over all non-pending submissions', () => {
    const subs = [{ score: 0.3, verdict: 'WA' }, { score: 0.8, verdict: 'AC' }] as any[];
    expect(getEarnedPointsForProblem(problem, subs)).toBe(8);
  });
});

describe('verdictToSymbol', () => {
  it('maps each verdict', () => {
    expect(verdictToSymbol['AC']).toBe('*');
    expect(verdictToSymbol['WA']).toBe('x');
    expect(verdictToSymbol['TLE']).toBe('t');
  });
});

describe('submission color maps', () => {
  it('have Pending keys', () => {
    expect(submissionTextColor['Pending']).toBeDefined();
    expect(submissionCircleColor['Pending']).toBeDefined();
    expect(submissionCircleBorderColor['Pending']).toBeDefined();
  });

  it('have all execution verdict keys', () => {
    const verdicts = ['AC', 'WA', 'RTE', 'MLE', 'TLE', 'CE', 'IE'] as const;
    for (const v of verdicts) {
      expect(submissionTextColor[v]).toBeDefined();
      expect(submissionCircleColor[v]).toBeDefined();
      expect(submissionCircleBorderColor[v]).toBeDefined();
    }
  });
});
