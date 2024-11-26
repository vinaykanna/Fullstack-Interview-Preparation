function countNumbers(collection) {
  let count = 0;

  function helper(item) {
    if (Array.isArray(item)) {
      for (let element of item) {
        helper(element);
      }
    }

    if (typeof item === "number") {
      count++;
    }
  }

  for (let item of collection) {
    helper(item);
  }

  return count;
}

const result = countNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);
