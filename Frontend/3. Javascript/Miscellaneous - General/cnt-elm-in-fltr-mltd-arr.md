**Implementation - I**

```tsx
function countElement(arr, callBack) {
  let count = 0;

  for (let item of arr) {
    if (Array.isArray(item)) {
      count += countElement(item, callBack);
    } else if (callBack(item)) {
      count++;
    }
  }

  return count;
}

const arr = [[1, [2, [3, "foo", { a: 1, b: 2 }]], "bar"]];
const result = countElement(arr, (item) => typeof item === "number");
console.log(result);
```