export const GITHUB_REPO_OWNER =
  process.env.NEXT_PUBLIC_GITHUB_REPO_OWNER || 'cpinitiative';
export const GITHUB_REPO_NAME =
  process.env.NEXT_PUBLIC_GITHUB_REPO_NAME || 'usaco-guide';
export const GITHUB_DEFAULT_BRANCH =
  process.env.NEXT_PUBLIC_GITHUB_DEFAULT_BRANCH || 'master';

export function githubRepoUrl(path = '') {
  return `https://github.com/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}${path}`;
}

export function githubRawUrl(path: string) {
  return `https://raw.githubusercontent.com/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/${GITHUB_DEFAULT_BRANCH}/${path}`;
}

export function githubApiBase() {
  return '/repos/' + GITHUB_REPO_OWNER + '/' + GITHUB_REPO_NAME;
}
