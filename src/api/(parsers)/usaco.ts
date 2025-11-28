export default function parseUsaco(url: string, htmlContent: string) {
  const id = url.split('=').at(-1);
  if (!id) throw new Error(`${url} does not contain problem id`);
  const problem = htmlContent.match(/<h2> Problem (\d). (.*) <\/h2>/);
  let number, title;
  if (!problem) {
    number = 'unknown';
    title = 'unknown';
  } else {
    number = problem[1];
    title = problem[2];
  }
  const contest = htmlContent.match(
    /<h2> USACO (\d+) (December|January|February|(?:US Open)) Contest, (Bronze|Silver|Gold|Platinum) <\/h2>/
  );
  let year, month, division;
  if (!contest) {
    year = 'unknown';
    month = 'unknown';
    division = 'unknown';
  } else {
    year = contest[1];
    month = contest[2]!;
    division = contest[3]!;
  }
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
