import { getAlgoliaRecords } from '../src/utils/algolia-queries';
import searchClient from '../src/utils/algoliaSearchClient';

async function runIndexing() {
  if (!process.env.ALGOLIA_APP_ID) {
    console.log('Algolia app ID not found - skipping indexing');
    return;
  }

  try {
    const records = await getAlgoliaRecords();

    await Promise.all(
      records.map(async ({ records: indexRecords, indexName }) => {
        console.log(
          `Indexing ${indexRecords.length} records to ${indexName}...`
        );

        // Use Algolia v5 API
        const response = await searchClient.saveObjects({
          indexName,
          objects: indexRecords,
        });

        console.log(
          `Successfully indexed ${indexRecords.length} objects to ${indexName}`
        );
        return response;
      })
    );

    console.log('Algolia indexing complete');
  } catch (error) {
    console.error('Algolia indexing failed:', error);
    process.exit(1);
  }
}

runIndexing().catch(console.error);
