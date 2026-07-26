import { describe, expect, it, vi, beforeEach } from 'vitest';
import { isUsaco, checkInvalidUsacoMetadata, autoGenerateSolutionMetadata } from '../../models/problem';
import { groupId, members } from './fixtures';

describe('groups fixtures', () => {
  it('provides a valid group ID', () => {
    expect(groupId).toBe('test-group-1');
  });

  it('provides members', () => {
    expect(members).toHaveLength(3);
    expect(members[0]).toHaveProperty('uid');
  });

  it('each member has required fields', () => {
    for (const member of members) {
      expect(member).toHaveProperty('uid');
      expect(typeof member.uid).toBe('string');
    }
  });
});

describe('isUsaco helper', () => {
  it('recognizes recent divisions', () => {
    expect(isUsaco('Bronze')).toBe(true);
    expect(isUsaco('Silver')).toBe(true);
    expect(isUsaco('Gold')).toBe(true);
    expect(isUsaco('Platinum')).toBe(true);
  });
});

describe('autoGenerateSolutionMetadata USACO', () => {
  it('returns USACO metadata from URL', () => {
    const meta = autoGenerateSolutionMetadata(
      'Bronze',
      'Test',
      'https://www.usaco.org/index.php?page=viewproblem2&cpid=1234'
    );
    expect(meta?.kind).toBe('USACO');
    expect((meta as any)?.usacoId).toBe('1234');
  });
});

describe('checkInvalidUsacoMetadata', () => {
  it('passes for valid metadata', () => {
    const meta: any = {
      uniqueId: 'usaco-1113',
      url: 'http://www.usaco.org/index.php?page=viewproblem2&cpid=1113',
      source: 'Gold',
      solutionMetadata: { kind: 'USACO', usacoId: '1113' },
    };
    expect(() => checkInvalidUsacoMetadata(meta)).not.toThrow();
  });
});
