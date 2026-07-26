import { describe, expect, it, vi } from 'vitest';
import generateRandomId from './generateRandomId';

describe('generateRandomId', () => {
  it('returns a string of the requested length', () => {
    const id = generateRandomId(16);
    expect(id).toHaveLength(16);
  });

  it('returns strings of different lengths for different requests', () => {
    expect(generateRandomId(8)).toHaveLength(8);
    expect(generateRandomId(12)).toHaveLength(12);
  });

  it('uses only the allowed character set', () => {
    const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const id = generateRandomId(100);
    expect([...id].every(c => allowed.includes(c))).toBe(true);
  });

  it('produces different values on successive invocations', () => {
    const ids = new Set(Array.from({ length: 50 }, () => generateRandomId(12)));
    expect(ids.size).toBeGreaterThan(1);
  });
});
