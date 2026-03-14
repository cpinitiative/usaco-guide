const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const DEBUG = false;

// Configuration
const SEARCH_DIRECTORIES = ["content", "solutions"]; // Add all directories to search
const FILE_EXTENSIONS = [".js", ".jsx", ".ts", ".tsx", ".md", ".mdx"]; // File types to process
const EXCLUDE_DIRECTORIES = ["node_modules", ".next", "public"]; // Directories to exclude

/**
 * Replaces relative imports in a file with absolute paths.
 * * @param {string} filePath The path to the file to process.
 */
async function processFile(filePath) {
  try {
    let fileContent = await readFile(filePath, "utf8");
    let hasChanged = false;

    // A more specific regex to capture relative paths.
    // It looks for patterns like `src="..."`, `href="..."`, `url(...)` or `![...](...)`
    // and specifically targets paths starting with `./` or `../`.
    const importRegex =
      /(?<=\(|\s)(['"]?)((?:\.\/|\.\.\\|(?!\/|https?:\/\/)[^'"\s\)\(]+\/|(?!\/|https?:\/\/)[^'"\s\)\(]+\\)[^'"\s\)\(]+\.(?:png|jpg|jpeg|gif|svg|webp|txt|mdx))(['"]?)(?=\)|\s)/g;

    const newContent = fileContent.replace(importRegex, (match, p1, p2, p3) => {
      let relativePath = p2;

      // Check if the import contains 'src/assets'
      if (relativePath.includes("src/assets")) {
        const baseName = path.basename(relativePath);
        hasChanged = true;
        return `/assets/${baseName}${p3}`;
      } else {
        // Resolve the relative path to an absolute path
        const absolutePath = path.resolve(path.dirname(filePath), relativePath);
        // Normalize the path to be relative to the project root or desired base
        const normalizedPath = path
          .relative(path.resolve(), absolutePath)
          .replace(/\\/g, "/");
        hasChanged = true;
        return `/${p1}${normalizedPath}${p3}`;
      }
    });

    if (hasChanged) {
      if (!DEBUG) await writeFile(filePath, newContent, "utf8");
      console.log(`File updated: ${filePath}`);
      if (DEBUG) console.log(newContent);
      return true;
    } else {
      console.log(`No changes needed for file: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
    return false;
  }
}

async function walkDirectory(directory) {
  let filesProcessed = 0;
  let filesUpdated = 0;

  async function processDirectory(dir) {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        if (!EXCLUDE_DIRECTORIES.includes(entry.name)) {
          await processDirectory(fullPath);
        }
      } else if (
        FILE_EXTENSIONS.includes(path.extname(entry.name).toLowerCase())
      ) {
        filesProcessed++;
        const wasUpdated = await processFile(fullPath);
        if (wasUpdated) filesUpdated++;
      }
    }
  }

  for (const dir of SEARCH_DIRECTORIES) {
    if (fs.existsSync(dir)) {
      await processDirectory(dir);
    } else {
      console.warn(`Directory not found: ${dir}`);
    }
  }

  return { filesProcessed, filesUpdated };
}

async function runMigration() {
  console.log("Starting static assets path migration...");

  const startTime = Date.now();
  const { filesProcessed, filesUpdated } = await walkDirectory(process.cwd());
  const duration = (Date.now() - startTime) / 1000;

  console.log("\nMigration complete!");
  console.log(`Processed ${filesProcessed} files`);
  console.log(`Updated ${filesUpdated} files`);
  console.log(`Time taken: ${duration.toFixed(2)} seconds`);
}

runMigration().catch(console.error);
