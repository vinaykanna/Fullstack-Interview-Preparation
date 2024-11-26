**Implementation** 

```tsx
const deepFlatten = (arr) => {
  let result = [];

  const flatten = (arr) => {
    for (let item of arr) {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        result.push(item);
      }
    }
  };

  flatten(arr);
  return result;
};

let arr = [1, [2, 3], [4, 5, 6], [7, [8, 9, 10]]];
console.log(deepFlatten(arr));
```