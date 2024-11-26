**Implementation - I**

```tsx
Array.prototype.myFlat = function (depth = 1) {
  let arr = this;
  let result = [];
  let i = 1;

  let helper = (arr) => {
    for (let item of arr) {
      if (Array.isArray(item) && i <= depth) {
        helper(item);
        i++;
      } else {
        result.push(item);
      }
    }
  };

  helper(arr);

  return result;
};

let arr = [1, 2, [3, 4], [[5, 6]], [7, [8, 9]]];
let result = arr.myFlat(2);
console.log(result);
```