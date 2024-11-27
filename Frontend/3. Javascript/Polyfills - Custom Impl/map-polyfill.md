**Implementation** 

```tsx
Array.prototype.customMap = function (callBack) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callBack(this[i], i, this));
  }

  return result;
};

let newArr = [1, 2, 3, 4].customMap((value) => value + 1);
console.log(newArr);
```