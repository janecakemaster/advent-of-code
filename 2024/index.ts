import { dirname } from "path";
import { fileURLToPath } from "url";
import { day1 } from "./day1";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const functions = {
  day1,
};

const functionName = process.argv[2];

if (functionName in functions) {
  // Call the function with spread arguments
  functions[functionName]();
} else {
  console.log(`${functionName.replace("day", "day ")} not implemented!`);
}
