**Implementation - I**

```tsx
let invervalIds = [];
let originalSetInterval = window.setTimeout;
let originalClearInterval = window.clearInterval;

window.setInterval = function (cb, delay) {
  let id = originalSetInterval(cb, delay);
  invervalIds.push(id);
  return id;
};

window.clearInterval = function (id) {
  invervalIds = invervalIds.filter((item) => item !== id);
  originalClearInterval(id);
};

window.clearAllIntervals = function () {
  while (invervalIds.length) {
    clearInterval(invervalIds.pop());
  }
};

let firstId = setInterval(() => {
  console.log("first timeout");
}, 1000);

console.log(invervalIds);
clearInterval(firstId);
console.log(invervalIds);

let secondId = setInterval(() => {
  console.log("second timeout");
}, 5000);

let thirdId = setInterval(() => {
  console.log("third timeout");
}, 10000);

console.log(invervalIds);
clearAllIntervals();
console.log(invervalIds);
```