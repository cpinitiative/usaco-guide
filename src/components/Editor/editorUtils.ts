import { githubRawUrl } from '../../config';

export const fetchFileContent = async (
  filePath: string
): Promise<{ markdown: string; problems?: string }> => {
  const githubURL = encodeURI(githubRawUrl(filePath));
  const promises = [fetch(githubURL)];
  if (filePath.startsWith('content/')) {
    // module
    const githubProblemsURL = encodeURI(
      githubRawUrl(filePath.replace(/\.mdx$/, '.problems.json'))
    );
    promises.push(fetch(githubProblemsURL));
  }

  const result = await Promise.all(promises);
  return {
    markdown: await result[0].text(),
    problems: result.length > 1 && result[1].ok ? await result[1].text() : '',
  };
};
