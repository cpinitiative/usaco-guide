import { createHash } from 'crypto';
import { getAlgoliaRecords } from '../src/utils/algolia-queries';
import searchClient from '../src/utils/algoliaSearchClient';

function stableStringify(value: unknown): string {
  if (value === null || typeof value !== 'object') {
    return JSON.stringify(value) ?? 'null';
  }
  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(',')}]`;
  }
  const obj = value as Record<string, unknown>;
  const keys = Object.keys(obj).sort();
  return `{${keys
    .map(k => `${JSON.stringify(k)}:${stableStringify(obj[k])}`)
    .join(',')}}`;
}

function contentHash(record: unknown): string {
  return createHash('sha256').update(stableStringify(record)).digest('hex');
}

// Map of objectID -> stored _contentHash. Empty if the index doesn't exist yet.
async function getExistingHashes(
  indexName: string
): Promise<Map<string, string>> {
  const existing = new Map<string, string>();
  try {
    await searchClient.browseObjects({
      indexName,
      browseParams: {
        attributesToRetrieve: ['_contentHash'],
        hitsPerPage: 1000,
      },
      aggregator: (response: {
        hits: Array<{ objectID: string; _contentHash?: string }>;
      }) => {
        for (const hit of response.hits) {
          existing.set(hit.objectID, hit._contentHash ?? '');
        }
      },
    });
  } catch {
    console.log(`Could not browse "${indexName}"; indexing all records.`);
  }
  return existing;
}

async function runIndexing() {
  if (!process.env.ALGOLIA_APP_ID) {
    console.log('Algolia app ID not found - skipping indexing');
    return;
  }

  try {
    const records = await getAlgoliaRecords();

    await Promise.all(
      records.map(async ({ records: indexRecords, indexName }) => {
        const withHashes = indexRecords.map(record => ({
          ...record,
          _contentHash: contentHash(record),
        }));

        const existing = await getExistingHashes(indexName);

        // Only push new/changed records, and delete ones no longer present.
        const toSave = withHashes.filter(
          record => existing.get(record.objectID) !== record._contentHash
        );
        const currentIDs = new Set(withHashes.map(record => record.objectID));
        const toDelete = [...existing.keys()].filter(id => !currentIDs.has(id));

        if (toSave.length > 0) {
          await searchClient.saveObjects({ indexName, objects: toSave });
        }
        if (toDelete.length > 0) {
          await searchClient.deleteObjects({ indexName, objectIDs: toDelete });
        }

        console.log(
          `${indexName}: ${toSave.length} inserted, ${toDelete.length} deleted, ` +
            `${withHashes.length - toSave.length} unchanged (${withHashes.length} total)`
        );
      })
    );

    console.log('Algolia indexing complete');
  } catch (error) {
    console.error('Algolia indexing failed:', error);
    process.exit(1);
  }
}

runIndexing().catch(console.error);
