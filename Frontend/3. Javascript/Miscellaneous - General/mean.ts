export default function mean(array: number[]): number {
  return array.reduce((prev, curr) => prev + curr, 0) / array.length;
}

console.log(mean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
