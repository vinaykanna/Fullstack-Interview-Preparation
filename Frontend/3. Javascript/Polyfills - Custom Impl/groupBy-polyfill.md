```tsx
function groupBy(arr, keyFinder) {
  return arr.reduce((acc, cur) => {
    let key = typeof keyFinder === "function" ? keyFinder(cur) : cur[keyFinder];

    if (key in acc) {
      acc[key] = [...acc[key], cur];
    } else {
      acc[key] = [cur];
    }

    return acc;
  }, {});
}

let result1 = groupBy([6.1, 4.2, 6.3], Math.floor);
let result2 = groupBy(["one", "two", "three"], "length");
let result3 = groupBy(
  [
    { name: "vinay", age: 18 },
    { name: "kishan", age: 16 },
    { name: "naveen", age: 15 },
    { name: "srikanth", age: 18 },
  ],
  (value) => value.age
);

console.log(result3);
```