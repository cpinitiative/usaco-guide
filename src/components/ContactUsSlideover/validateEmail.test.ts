import { describe, it, expect } from 'vitest';
import { validateEmail } from './ContactUsSlideover';

describe('validateEmail', () => {
  it('should accept valid emails', () => {
    expect(validateEmail('user@example.com')).toBe(true);
    expect(validateEmail('test.user@domain.co')).toBe(true);
    expect(validateEmail('name+tag@example.com')).toBe(true);
  });

  it('should reject invalid emails', () => {
    expect(validateEmail('')).toBe(false);
    expect(validateEmail('missing-at-sign.com')).toBe(false);
    expect(validateEmail('@missing-local.com')).toBe(false);
    expect(validateEmail('missing-domain@')).toBe(false);
    expect(validateEmail('spaces in@email.com')).toBe(false);
  });
});
