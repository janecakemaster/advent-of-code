import { getInput } from "./input";

export function day2() {
  const input = getInput("day2-input.txt");
  // Each report is a list of numbers called levels that are separated by spaces
  const reports = input.split("\n").filter((line) => line.trim() !== "");

  let part1 = 0;
  for (let i = 0; i < reports.length; i++) {
    let passes = true;

    const levels = reports[i].split(" ").map((level) => parseInt(level));
    const first = levels[0];
    const last = levels[levels.length - 1];
    const isIncreasing = first < last;

    for (let j = 0; j < levels.length - 1; j++) {
      const left = levels[j];
      const right = levels[j + 1];
      if (left === right) {
        passes = false;
      }
      if (isIncreasing) {
        if (right < left) {
          passes = false;
        }
        if (right - left > 3) {
          passes = false;
        }
      } else {
        if (right > left) {
          passes = false;
        }
        if (left - right > 3) {
          passes = false;
        }
      }
    }
    if (passes) {
      part1++;
    }
  }

  console.log({ part1 });
}
