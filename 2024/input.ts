import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function getInput(filename) {
  const inputFilePath = path.join(__dirname, filename);
  return fs.readFileSync(inputFilePath, "utf-8");
}
