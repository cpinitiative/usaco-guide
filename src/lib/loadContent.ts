import path from 'path';

/**
 * Loads and processes cow images from the assets directory
 * @returns Array of objects containing image data
 */
export async function loadCowImages() {
  const { readdir } = await import('fs/promises');
  const assetsDir = path.join(process.cwd(), 'public', 'assets');
  const cowImages: Array<{
    name: string;
    src: string;
  }> = [];

  try {
    // Recursively find all image files in the assets directory
    const findImages = async (dir: string, basePath: string = '') => {
      const entries = await readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const relativePath = path.join(basePath, entry.name);

        if (entry.isDirectory()) {
          await findImages(fullPath, relativePath);
        } else if (
          entry.isFile() &&
          /cows/i.test(fullPath) && // Check if path contains 'cows' (case insensitive)
          /\.(jpg|jpeg|png|webp|gif)$/i.test(entry.name) // Common image extensions
        ) {
          const publicPath = path
            .relative(path.join(process.cwd(), 'public'), fullPath)
            .replace(/\\/g, '/');
          cowImages.push({
            name: path.parse(entry.name).name,
            src: `/${publicPath}`,
          });
        }
      }
    };

    await findImages(assetsDir);

    // Sort images by name
    cowImages.sort((a, b) => a.name.localeCompare(b.name));
    return cowImages;
  } catch (error) {
    console.error('Error loading cow images:', error);
    return [];
  }
}

export const loadTeamImages = async () => {
  const { readdir } = await import('fs/promises');
  const teamImagesDir = path.join(
    process.cwd(),
    'public',
    'content',
    'team',
    'images'
  );
  console.log('Loading team images from', teamImagesDir);
  const teamImages: Array<{
    name: string;
    src: string;
  }> = [];
  try {
    // Recursively find all image files in the assets directory
    const findImages = async (dir: string, basePath: string = '') => {
      const entries = await readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const relativePath = path.join(basePath, entry.name);

        if (entry.isDirectory()) {
          await findImages(fullPath, relativePath);
        } else if (
          entry.isFile() &&
          /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(entry.name) // Common image extensions
        ) {
          // Remove the 'public' prefix from the path
          const publicPath = path
            .relative(path.join(process.cwd(), 'public'), fullPath)
            .replace(/\\/g, '/');

          teamImages.push({
            name: path.basename(entry.name, path.extname(entry.name)),
            src: `/${publicPath}`,
          });
        }
      }
    };

    await findImages(teamImagesDir);
    return teamImages;
  } catch (error) {
    console.error('Error loading team images:', error);
    return [];
  }
};

export type { MdxContent, ProblemInfo } from '../types/content';
