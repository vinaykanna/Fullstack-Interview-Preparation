**Implementation - I**

```tsx
Array.prototype.listeners = {};

Array.prototype.addListener = function (event, callback) {
  if (!this.listeners[event]) {
    this.listeners[event] = [];
  }
  this.listeners[event].push(callback);
};

Array.prototype.removeListener = function (event, callback) {
  if (!this.listeners[event]) {
    return;
  }
  this.listeners[event] = this.listeners[event].filter((cb) => cb !== callback);
};

Array.prototype.emit = function (event, ...args) {
  if (!this.listeners[event]) {
    return;
  }
  this.listeners[event].forEach((cb) => {
    cb(...args);
  });
};

Array.prototype.pushWithEvent = function (...args) {
  const result = Array.prototype.push.apply(this, args);
  this.emit("add", args, this);
  return result;
};

Array.prototype.popWithEvent = function () {
  const result = Array.prototype.pop.apply(this);
  this.emit("pop", result, this);
  return result;
};

Array.prototype.removeWithEvent = function (item) {
  const index = this.indexOf(item);
  if (index === -1) {
    return;
  }
  const result = Array.prototype.splice.apply(this, [index, 1]);
  this.emit("remove", result, this);
  return result;
};

const arr = [1, 2, 3, 4, 5];

arr.addListener("add", (items, array) => {
  console.log(items, `were added to the array`);
});

arr.addListener("add", (items, array) => {
  console.log(items, `were added to the array`);
});

arr.addListener("pop", (item, array) => {
  console.log(item, `was popped from the array`);
});

arr.addListener("remove", (item, array) => {
  console.log(item, `was removed from the array`);
});

arr.pushWithEvent(6);
arr.popWithEvent();
arr.removeWithEvent(3);

console.log(arr);
```