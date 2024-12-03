import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const functions = {
  day1: () => {
    const inputFilePath = path.join(__dirname, "day1-input.txt");
    const input = fs.readFileSync(inputFilePath, "utf-8");
    const lines = input.split("\n").filter((line) => line.trim() !== "");

    const array1: number[] = [];
    const array2: number[] = [];

    lines.forEach((line, index) => {
      const [a, b] = line.split('   ')
      array1.push(parseInt(a))
      array2.push(parseInt(b))
    });

    array1.sort()
    array2.sort()

    let result = 0
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        result += Math.abs(array1[i] - array2[i])
      }
    }
    console.log("Result:", result);
  },
};

const getCurrentDirectory = () => {
  console.log("Current directory:", __dirname);
};

const functionName = process.argv[2];

if (functionName in functions) {
  // Call the function with spread arguments
  functions[functionName]();
} else {
  console.log(`${functionName.replace("day", "day ")} not implemented!`);
  getCurrentDirectory();
}
