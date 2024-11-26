**Implementation - I**

```tsx
function deepEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (typeof obj1[key] === "object") {
      if (!deepEqual(obj1[key], obj2[key])) return false;
      else continue;
    }

    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

let obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
    f: { g: 5, h: 6 },
  },
  k: [1, 2, 3, 5],
  marks: [
    {
      name: "vinay",
      age: 30,
    },
    {
      name: "kishan",
      age: 50,
    },
  ],
};

let obj2 = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
    f: { g: 5, h: 6 },
  },
  k: [1, 2, 3, 5],
  marks: [
    {
      name: "vinay",
      age: 30,
    },
    {
      name: "kishan",
      age: 50,
    },
  ],
};

console.log(deepEqual(obj1, obj2)); // true
```