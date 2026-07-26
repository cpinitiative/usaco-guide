import { describe, expect, it } from 'vitest';
import { getClientIdentifier } from './rateLimit';

describe('getClientIdentifier', () => {
  it('trusts req.ip over private/local loopback when available', () => {
    expect(getClientIdentifier({ ip: '1.2.3.4' })).toBe('1.2.3.4');
    expect(getClientIdentifier({ ip: '2001:db8::1' })).toBe('2001:db8::1');
  });

  it('skips loopback req.ip in favor of x-real-ip', () => {
    expect(getClientIdentifier({ ip: '127.0.0.1', headers: { 'x-real-ip': '5.6.7.8' } })).toBe('5.6.7.8');
  });

  it('falls back to x-real-ip when req.ip is absent', () => {
    expect(getClientIdentifier({ headers: { 'x-real-ip': '5.6.7.8' } })).toBe('5.6.7.8');
  });

  it('falls back to loopback req.ip when no headers', () => {
    expect(getClientIdentifier({ ip: '127.0.0.1' })).toBe('127.0.0.1');
  });

  it('returns unknown when no identifier is available', () => {
    expect(getClientIdentifier({})).toBe('unknown');
  });

  it('rejects x-real-ip when it is an array type', () => {
    expect(getClientIdentifier({ ip: '127.0.0.1', headers: { 'x-real-ip': ['1.2.3.4'] } })).toBe('127.0.0.1');
  });

  it('trims whitespace from x-real-ip', () => {
    expect(getClientIdentifier({ headers: { 'x-real-ip': '  1.2.3.4  ' } })).toBe('1.2.3.4');
  });
});
