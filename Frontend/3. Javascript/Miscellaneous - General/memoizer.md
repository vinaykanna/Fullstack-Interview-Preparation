**Implementation - I**

```tsx
function memoized(func) {
  let cache = new Map();

  return function (...args) {
    let key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("in cache");
      return cache.get(key);
    }

    console.log("new value");
    let value = func(...arguments);
    cache.set(key, value);
    return value;
  };
}

function sum(a, b) {
  return a + b;
}

let memoSum = memoized(sum);
console.log(memoSum(2, 3));
console.log(memoSum(2, 3));
console.log(memoSum(5, 2));
console.log(memoSum(5, 2));
```