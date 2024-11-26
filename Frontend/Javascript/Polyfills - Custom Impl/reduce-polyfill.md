**Implementation** 

```tsx
Array.prototype.customReduce = function (callBack, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callBack(accumulator, this[i], i, this)
      : this[i];
  }

  return accumulator;
};

let result = [1, 2, 3, 4].customReduce((acc, cv) => acc + cv);

console.log(result);
```