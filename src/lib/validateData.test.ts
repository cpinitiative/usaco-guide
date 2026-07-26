import { describe, expect, it } from 'vitest';
import { validateProblemConsistency, validateModuleProblems, validateSolutionRelationships } from './validateData';

function makeProblem(overrides: Partial<{
  uniqueId: string;
  name: string;
  url: string;
  source: string;
  module: any;
  solution: any;
}> = {}) {
  return {
    uniqueId: 'test-1',
    name: 'Test Problem',
    url: 'https://example.com/problem',
    source: 'Test',
    difficulty: 'Normal' as const,
    tags: [],
    solution: { kind: 'link' as const, url: 'https://example.com/solution', label: 'External' },
    ...overrides,
  };
}

describe('validateProblemConsistency', () => {
  it('accepts a single problem without error', () => {
    const result = validateProblemConsistency([makeProblem()]);
    expect(result.problemSlugs.size).toBe(1);
    expect(result.problemInfo.size).toBe(1);
  });

  it('throws when two problems share a slug but different unique IDs', () => {
    expect(() => validateProblemConsistency([
      makeProblem({ uniqueId: 'a', name: 'Same Name', url: 'https://example.com/x' }),
      makeProblem({ uniqueId: 'b', name: 'Same Name', url: 'https://example.com/x' }),
    ])).toThrow('same slugs');
  });

  it('throws when same uniqueId appears with inconsistent name/url/source', () => {
    const mod = { frontmatter: { id: 'mod1', title: 'Module 1' } } as any;
    expect(() =>
      validateProblemConsistency([
        makeProblem({ uniqueId: 'dup', name: 'A', url: 'https://a.com', module: mod }),
        makeProblem({ uniqueId: 'dup', name: 'B', url: 'https://b.com', module: mod }),
      ])
    ).toThrow('different information');
  });

  it('allows same uniqueId with consistent fields', () => {
    const mod = { frontmatter: { id: 'mod1', title: 'Module 1' } } as any;
    const p = makeProblem({ uniqueId: 'dup', name: 'A', url: 'https://a.com', module: mod });
    expect(() => validateProblemConsistency([p, p])).not.toThrow();
  });

  it('collects USACO IDs', () => {
    const result = validateProblemConsistency([
      makeProblem({ uniqueId: 'usaco-1', source: 'Bronze', url: 'https://usaco.org/page1?cpid=1' }),
      makeProblem({ uniqueId: 'cses-1', source: 'CSES', url: 'https://cses.fi/task/2' }),
    ]);
    expect(result.usacoIds.has('usaco-1')).toBe(true);
    expect(result.usacoIds.has('cses-1')).toBe(false);
  });

  it('throws when same URL maps to different unique IDs unless allowlisted', () => {
    expect(() =>
      validateProblemConsistency([
        makeProblem({ uniqueId: 'a', name: 'A', url: 'https://duplicate.com/x' }),
        makeProblem({ uniqueId: 'b', name: 'B', url: 'https://duplicate.com/x' }),
      ])
    ).toThrow('assigned to both');
  });

  it('allows same URL for different unique IDs when on allowlist', () => {
    const result = validateProblemConsistency([
      makeProblem({ uniqueId: 'a', name: 'A', url: 'https://cses.fi/107/list/' }),
      makeProblem({ uniqueId: 'b', name: 'B', url: 'https://cses.fi/107/list/' }),
    ]);
    expect(result.problemURLToUniqueID.get('https://cses.fi/107/list/')).toBe('b');
  });

  it('throws when extra problem conflicts with module problem', () => {
    const mod = { frontmatter: { id: 'mod1', title: 'Module 1' } } as any;
    expect(() =>
      validateProblemConsistency([
        makeProblem({ uniqueId: 'x', module: undefined }),
        makeProblem({ uniqueId: 'x', module: mod }),
      ])
    ).toThrow('extraProblems.json');
  });
});

describe('validateModuleProblems', () => {
  it('throws for unknown module ID', () => {
    expect(() =>
      validateModuleProblems([{ frontmatter: { id: 'mod1' } } as any], [
        { moduleId: 'missing', problemLists: [] },
      ])
    ).toThrow('non-existent module');
  });

  it('throws when a problem lacks uniqueId', () => {
    expect(() =>
      validateModuleProblems([{ frontmatter: { id: 'mod1' } } as any], [
        {
          moduleId: 'mod1',
          problemLists: [{ listId: '1', problems: [{ uniqueId: '', name: '', url: '', source: '', difficulty: 'Normal', tags: [], solution: null }] }],
        },
      ])
    ).toThrow('missing uniqueId');
  });
});

describe('validateSolutionRelationships', () => {
  it('throws when a solution has no corresponding problem', () => {
    expect(() =>
      validateSolutionRelationships(
        new Map([['sol1', { frontmatter: { id: 'sol1' } } as any]]),
        [makeProblem({ uniqueId: 'prob1' })]
      )
    ).toThrow("Couldn't find corresponding problem");
  });

  it('throws when problem lacks internal solution', () => {
    expect(() =>
      validateSolutionRelationships(
        new Map(),
        [makeProblem({ uniqueId: 'p1', solution: { kind: 'internal' } })]
      )
    ).toThrow("claims to have an internal solution but doesn't");
  });
});
