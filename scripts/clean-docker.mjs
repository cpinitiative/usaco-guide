import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { rimraf } from "rimraf";

const clearDirectory = async (directory) => {
	try {
		const entries = await readdir(directory);
		await rimraf(entries.map((entry) => join(directory, entry)));
	} catch (error) {
		if (error?.code !== "ENOENT") throw error;
	}
};

await rimraf(["dist", "public/usaco-divisions.json"]);
await clearDirectory(".next");
await clearDirectory("data");
