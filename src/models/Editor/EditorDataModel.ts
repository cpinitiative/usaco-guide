/**
 * The maximum amount of storage size per block, in bytes. Firebase limits each document
 * to 1MB, and we store each block as a single document, so the cap should be
 * below 1MB. Our size calculations are not exact, so this is currently set to
 * 0.9MB / 900KB.
 */
const MAX_BLOCK_STORAGE_SIZE = 900 * 1000;
