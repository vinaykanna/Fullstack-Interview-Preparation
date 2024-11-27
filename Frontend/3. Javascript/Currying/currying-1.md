Create a javascript function that will remember its previously passed values and return the sum of the current and previous value.

```tsx
function curry() {
  let sum = 0;

  return function (value) {
    sum += value;
    return sum;
  };
}

let sum = curry();
console.log(sum(3));
console.log(sum(10));
console.log(sum(15));
```