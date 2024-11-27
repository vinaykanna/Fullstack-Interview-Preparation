**Implementation - I**

```tsx
function filterObj(arr, filterKey) {
  let filterType = typeof filterKey === "number" ? "index" : "value";

  if (filterType && filterKey < arr.length) {
    return arr[filterKey];
  }

  for (let item of arr) {
    for (let key in item) {
      if (item[key] === filterKey) {
        return item;
      }
    }
  }

  return undefined;
}

let result3 = filterObj(
  [
    { name: "vinay", skill: "HTML" },
    { name: "kishan", skill: "REACT" },
    { name: "naveen", skill: "Angular", age: "100" },
    { name: "vinay", skill: "HTML" },
  ],
  2
);

console.log(result3);
```