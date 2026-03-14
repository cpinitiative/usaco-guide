export async function getLastUpdated(filepath: string): Promise<string | null> {
  const { execSync } = await import("child_process");
  try {
    const result = execSync(`git log -1 --format=%ct "${filepath}"`, {
      encoding: "utf-8",
    });
    return new Date(parseInt(result.trim()) * 1000).toISOString();
  } catch {
    return null;
  }
}
