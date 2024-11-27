**Implementation** 

```tsx
Array.prototype.customFilter = function (callBack) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

let newArr = [1, 2, 3, 4].customFilter((value) => value > 1);
```