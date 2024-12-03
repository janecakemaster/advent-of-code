import { day1 } from "./day1";
import { day2 } from "./day2";

const functions = {
  day1,
  day2
};

const functionName = process.argv[2];

if (functionName in functions) {
  functions[functionName]();
} else {
  console.log(`${functionName.replace("day", "day ")} not solved!`);
}
