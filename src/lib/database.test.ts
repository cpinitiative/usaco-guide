import { describe, expect, it } from 'vitest';
import { getDatabase, closeDatabase } from './database';
import { DB_FILE, DATA_DIR } from './constants';

describe('database', () => {
  it('references the expected database file path', () => {
    expect(DB_FILE).toEqual(expect.stringContaining('content.db'));
    expect(DATA_DIR).toEqual(expect.stringContaining('data'));
  });

  it('returns a readable database connection when file exists', async () => {
    const db = await getDatabase();
    expect(db).toBeDefined();
    expect(typeof db.prepare).toBe('function');
  });

  it('closeDatabase does not throw', () => {
    expect(() => closeDatabase()).not.toThrow();
  });
});
