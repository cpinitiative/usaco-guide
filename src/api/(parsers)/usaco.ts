export default function parseUsaco(url: string, htmlContent: string) {
  const id = url.split('=').at(-1);
  if (!id) throw new Error(`${url} does not contain problem id`);
  const problem = htmlContent.match(/<h2> Problem (\d). (.*) <\/h2>/);
  if (!problem) throw new Error(`Problem title not found at url ${url}`);
  const number = problem[1],
    title = problem[2];
  const contest = htmlContent.match(
    /<h2> USACO (\d+) (December|January|February|(?:US Open)) Contest, (Bronze|Silver|Gold|Platinum) <\/h2>/
  );
  if (!contest) throw new Error(`Contest not found at url ${url}`);
  // year and month could be used someday idk
  const year = contest[1],
    month = contest[2],
    division = contest[3];
  return {
    uniqueId: `usaco-${id}`,
    name: title,
    source: division,
    solutionMetadata: {
      kind: 'USACO',
      usacoId: +id,
    },
  };
}
