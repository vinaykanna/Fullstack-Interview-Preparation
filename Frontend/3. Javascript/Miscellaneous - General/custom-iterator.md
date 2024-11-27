**Implementation - I**

```tsx
function helper(arr) {
  let i = 0;

  return {
    next: function () {
      let done = i >= arr.length;
      let value = !done ? arr[i++] : undefined;

      return {
        done: done,
        value: value,
      };
    },
  };
}

let iterator = helper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
```

**Implementation (Overriding Array iterator) - II**

```tsx
// Custom Iterator
let arr = [1, 2, 3, 4];
arr[Symbol.iterator] = function () {
  let nextValue = -1;
  let context = this;
  return {
    next: function () {
      nextValue++;
      return {
        done: nextValue >= context.length ? true : false,
        value: [nextValue, context[nextValue]],
      };
    },
  };
};

for (let [index, value] of arr) {
  console.log(index, value);
}

let newarr = [...arr, 5, 6, 7, 8, 9, 10];
console.log(newarr);
```