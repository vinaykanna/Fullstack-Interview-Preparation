Implement a currying function for 4 arguments. When we have reached the limit, return the value.

```tsx
function sum(...args) {
  let storage = [...args];

  if (storage.length === 0) {
    return 0;
  }

  if (storage.length === 4) {
    return storage.reduce((acc, cur) => acc + cur, 0);
  }

  let innerFunc = function (...args) {
    storage.push(...args);

    if (storage.length === 4) {
      return storage.reduce((acc, cur) => acc + cur, 0);
    }

    return innerFunc;
  };

  return innerFunc;
}

console.log(sum(1)(2, 3, 4));
```

For the last input when no argument is passed it should return 0.

```tsx
function sum(...args) {
  let storage = [...args];

  if (storage.length === 0) {
    return 0;
  }

  if (storage.length === 4) {
    return storage.reduce((acc, cur) => acc + cur, 0);
  }

  let innerFunc = function (...args) {
    storage.push(...args);

    if (args.length === 0) {
      return storage.reduce((acc, cur) => acc + cur, 0);
    }

    return innerFunc;
  };

  return innerFunc;
}

console.log(sum(1)(2, 3, 4)());
```