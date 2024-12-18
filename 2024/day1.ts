import { getInput } from "./input";

export function day1() {
  const input = getInput("day1-input.txt");
  const lines = input.split("\n").filter((line) => line.trim() !== "");

  const array1: number[] = [];
  const array2: number[] = [];

  lines.forEach((line, index) => {
    const [a, b] = line.split("   ");
    array1.push(parseInt(a));
    array2.push(parseInt(b));
  });

  array1.sort();
  array2.sort();

  let part1 = 0;
  let part2 = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      part1 += Math.abs(array1[i] - array2[i]);
    }

    const repeats = array2.filter((value) => value === array1[i]);
    part2 += array1[i] * repeats.length;
  }

  console.log({ part1, part2 });
}
