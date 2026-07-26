import { describe, expect, it, vi } from 'vitest';
import {
  isUsaco,
  checkInvalidUsacoMetadata,
  getProblemURL,
  generateProblemUniqueId,
  autoGenerateSolutionMetadata,
  PROBLEM_PROGRESS_OPTIONS,
  PROBLEM_DIFFICULTY_OPTIONS,
} from './problem';
import type { ProblemMetadata } from './problem';

describe('isUsaco', () => {
  it('matches recent USACO divisions', () => {
    expect(isUsaco('Bronze')).toBe(true);
    expect(isUsaco('Silver')).toBe(true);
    expect(isUsaco('Gold')).toBe(true);
    expect(isUsaco('Platinum')).toBe(true);
  });

  it('matches old USACO divisions', () => {
    expect(isUsaco('Old Bronze')).toBe(true);
    expect(isUsaco('Old Silver')).toBe(true);
    expect(isUsaco('Old Gold')).toBe(true);
  });

  it('matches year-based USACO sources', () => {
    expect(isUsaco('2015 December')).toBe(true);
    expect(isUsaco('2021 US Open')).toBe(true);
    expect(isUsaco('2020 First Contest')).toBe(true);
    expect(isUsaco('2019 Second Contest')).toBe(true);
    expect(isUsaco('2018 Third Contest')).toBe(true);
    expect(isUsaco('2021 January')).toBe(true);
    expect(isUsaco('2021 February')).toBe(true);
  });

  it('rejects non-USACO sources', () => {
    expect(isUsaco('Codeforces')).toBe(false);
    expect(isUsaco('CSES')).toBe(false);
    expect(isUsaco('CF')).toBe(false);
    expect(isUsaco('2015 NotAContest')).toBe(false);
  });
});

describe('checkInvalidUsacoMetadata', () => {
  it('passes for valid USACO metadata', () => {
    const meta: ProblemMetadata = {
      uniqueId: 'usaco-1113',
      name: 'Test',
      url: 'http://www.usaco.org/index.php?page=viewproblem2&cpid=1113',
      source: 'Gold',
      difficulty: 'Normal',
      tags: [],
      solutionMetadata: { kind: 'USACO', usacoId: '1113' },
    };
    expect(() => checkInvalidUsacoMetadata(meta)).not.toThrow();
  });

  it('skips non-USACO sources', () => {
    const meta: ProblemMetadata = {
      uniqueId: 'cf-1A',
      name: 'Test',
      url: 'https://codeforces.com',
      source: 'CF',
      difficulty: 'Normal',
      tags: [],
      solutionMetadata: null,
    };
    expect(() => checkInvalidUsacoMetadata(meta)).not.toThrow();
  });

  it('throws when USACO URL does not match ID', () => {
    const meta: ProblemMetadata = {
      uniqueId: 'usaco-1113',
      name: 'Test',
      url: 'http://www.usaco.org/index.php?page=viewproblem2&cpid=9999',
      source: 'Gold',
      difficulty: 'Normal',
      tags: [],
      solutionMetadata: null,
    };
    expect(() => checkInvalidUsacoMetadata(meta)).toThrow('Invalid USACO Metadata');
  });

  it('throws when USACO solution metadata ID mismatches', () => {
    const meta: ProblemMetadata = {
      uniqueId: 'usaco-1113',
      name: 'Test',
      url: 'http://www.usaco.org/index.php?page=viewproblem2&cpid=1113',
      source: 'Gold',
      difficulty: 'Normal',
      tags: [],
      solutionMetadata: { kind: 'USACO', usacoId: '9999' },
    };
    expect(() => checkInvalidUsacoMetadata(meta)).toThrow('Invalid USACO Metadata');
  });

  it('buffers POJ URLs from ID matching', () => {
    const meta: ProblemMetadata = {
      uniqueId: 'usaco-1234',
      name: 'Test',
      url: 'http://poj.org/problem/1234',
      source: 'Gold',
      difficulty: 'Normal',
      tags: [],
      solutionMetadata: null,
    };
    expect(() => checkInvalidUsacoMetadata(meta)).not.toThrow();
  });
});

describe('getProblemURL', () => {
  it('uses uniqueId for USACO sources', () => {
    expect(getProblemURL({ source: 'Bronze', name: 'Test', uniqueId: 'usaco-123' })).toBe('/problems/usaco-123-test');
  });

  it('uses uniqueId for CSES sources', () => {
    expect(getProblemURL({ source: 'CSES', name: 'Test', uniqueId: 'cses-123' })).toBe('/problems/cses-123-test');
  });

  it('uses slug for other sources', () => {
    const url = getProblemURL({ source: 'CF', name: 'Test Problem', uniqueId: 'cf-1A' });
    expect(url).toContain('/problems/');
    expect(url).toContain('test-problem');
  });

  it('strips " - " from name before slugifying', () => {
    const url = getProblemURL({ source: 'CF', name: 'A - Test', uniqueId: 'cf-1A' });
    expect(url).toContain('atest');
  });
});

describe('generateProblemUniqueId', () => {
  it('generates USACO ID from trailing code', () => {
    expect(generateProblemUniqueId('Bronze', 'Test', 'https://usaco.org/index.php?page=viewproblem2&cpid=1234')).toBe('usaco-1234');
  });

  it('generates CSES ID from trailing code', () => {
    expect(generateProblemUniqueId('CSES', 'Test', 'https://cses.fi/problemset/task/1652')).toBe('cses-1652');
  });

  it('generates CF ID from URL', () => {
    expect(generateProblemUniqueId('CF', 'Test', 'https://codeforces.com/problemset/problem/1917/D')).toBe('cf-1917D');
  });

  it('generates CF Gym ID', () => {
    expect(generateProblemUniqueId('CF', 'Test', 'https://codeforces.com/gym/102951/problem/A')).toBe('cfgym-102951A');
  });

  it('handles year-prefixed names', () => {
    const id = generateProblemUniqueId('Test', '2018 - Problem Name', 'https://example.com');
    expect(id).toBe('test-18-ProblemName');
  });

  it('handles Baltic OI', () => {
    expect(generateProblemUniqueId('Baltic OI', 'Test Problem', 'https://example.com')).toBe('baltic-TestProblem');
  });
});

describe('autoGenerateSolutionMetadata', () => {
  it('returns USACO metadata for USACO sources', () => {
    const meta = autoGenerateSolutionMetadata('Gold', 'Test', 'https://usaco.org/index.php?page=viewproblem2&cpid=1234');
    expect(meta?.kind).toBe('USACO');
    expect((meta as any)?.usacoId).toBe('1234');
  });

  it('returns autogen-label for probSources with 3 entries', () => {
    const meta = autoGenerateSolutionMetadata('CF', 'Test', 'https://codeforces.com');
    expect(meta?.kind).toBe('autogen-label-from-site');
    expect((meta as any)?.site).toBe('CF');
  });

  it('returns null for unhandled sources', () => {
    expect(autoGenerateSolutionMetadata('Unknown', 'Test', 'https://example.com')).toBe(null);
  });
});

describe('PROBLEM_OPTIONS', () => {
  it('exposes expected progress options', () => {
    expect(PROBLEM_PROGRESS_OPTIONS).toEqual(['Not Attempted', 'Solving', 'Solved', 'Reviewing', 'Skipped', 'Ignored']);
  });

  it('exposes expected difficulty options', () => {
    expect(PROBLEM_DIFFICULTY_OPTIONS).toEqual(['Very Easy', 'Easy', 'Normal', 'Hard', 'Very Hard', 'Insane']);
  });
});
