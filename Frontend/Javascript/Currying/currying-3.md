Write a function that satisfies the following.

```
add(1)(2).value() = 3;
add(1, 2)(3).value() = 6;
add(1)(2)(3).value() = 6;
add(1)(2) + 3 = 6;
```

```tsx
function sum(...args) {
  let storage = [...args];

  function innerFunc(...args2) {
    storage.push(...args2);
    return innerFunc;
  }

  innerFunc.valueOf = function () {
    return storage.reduce((acc, curr) => acc + curr, 0);
  };

  innerFunc.value = innerFunc.valueOf;

  return innerFunc;
}

console.log(sum(1)(2)(3)(4)(5)(6).value());
console.log(sum(20)(18) + 5);
```