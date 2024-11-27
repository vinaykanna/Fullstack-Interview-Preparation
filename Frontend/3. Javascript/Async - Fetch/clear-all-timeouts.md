**Implementation - I**

```tsx
let timeOutIds = [];
let originalSetTimeOut = window.setTimeout;
let originalClearTimeOuot = window.clearTimeout;

window.setTimeout = function (cb, delay) {
  let id = originalSetTimeOut(cb, delay);
  timeOutIds.push(id);
  return id;
};

window.clearTimeout = function (id) {
  timeOutIds = timeOutIds.filter((item) => item !== id);
  originalClearTimeOuot(id);
};

window.clearAllTimeouts = function () {
  while (timeOutIds.length) {
    clearTimeout(timeOutIds.pop());
  }
};

let firstId = setTimeout(() => {
  console.log("first timeout");
}, 1000);

console.log(timeOutIds);
clearTimeout(firstId);
console.log(timeOutIds);

let secondId = setTimeout(() => {
  console.log("second timeout");
}, 5000);

let thirdId = setTimeout(() => {
  console.log("third timeout");
}, 10000);

console.log(timeOutIds);
clearAllTimeouts();
console.log(timeOutIds);
```