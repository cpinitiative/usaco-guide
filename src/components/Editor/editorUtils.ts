export const fetchFileContent = async (
  filePath: string
): Promise<{ markdown: string; problems: string }> => {
  const githubURL = encodeURI(
    `https://raw.githubusercontent.com/cpinitiative/usaco-guide/master/${filePath}`
  );
  const githubProblemsURL = encodeURI(
    `https://raw.githubusercontent.com/cpinitiative/usaco-guide/master/${filePath.replace(
      /\.mdx$/,
      '.problems.json'
    )}`
  );

  const result = await Promise.all([
    fetch(githubURL),
    fetch(githubProblemsURL),
  ]);

  return {
    markdown: await result[0].text(),
    problems: result[1].ok ? await result[1].text() : '',
  };
};
