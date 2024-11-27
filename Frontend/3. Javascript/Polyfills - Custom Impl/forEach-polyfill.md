**Implementation** 

```tsx
Array.prototype.customForEach = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i, this);
  }
};

[1, 2, 3, 4].customForEach((value, index) => {
  console.log(value + index);
});
```