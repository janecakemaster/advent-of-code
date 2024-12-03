import { dirname } from "path";
import { fileURLToPath } from "url";
import { day1 } from "./day1";

const functions = {
  day1,
};

const functionName = process.argv[2];

if (functionName in functions) {
  functions[functionName]();
} else {
  console.log(`${functionName.replace("day", "day ")} not solved!`);
}
