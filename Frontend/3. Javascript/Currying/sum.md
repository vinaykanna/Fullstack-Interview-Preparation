Can you write code for this function: sum(a)(b)(c)....( n)(). This should return the sum of all the numbers a+b+c+..+n

**Implementation - I**

```
function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }

    return a;
  };
}

console.log(sum(1)(2)(3)(4)(5)(6)());
```

**Implementation - II**

```tsx
function sum(...args) {
  let storage = [...args];

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
console.log(sum(1)(2)(3)(4)(5)(6)());
```