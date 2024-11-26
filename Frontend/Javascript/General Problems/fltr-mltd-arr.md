**Implementation - I**

```tsx
function filter(arr, callBack) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(filter(item, callBack));
    } else if (callBack(item)) {
      result.push(item);
    }
  }

  return result;
}

const arr = [[1, [2, [3, "foo", { a: 1, b: 2 }]], "bar"]];
const result = filter(arr, (item) => typeof item === "object");
console.log(result);
```