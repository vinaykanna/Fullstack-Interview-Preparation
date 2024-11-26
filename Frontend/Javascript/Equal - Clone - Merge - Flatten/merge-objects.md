**Implementation (Shallow Merge) - I**

```tsx
function shallowMerge(...args) {
  let target = {};

  for (let i = 0; i < args.length; i++) {
    let source = args[i];
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}

let obj1 = {
  name: "John",
  age: 30,
  details: {
    address: "USA",
    phone: 1234567890,
  },
};

let obj2 = {
  qualification: "B.Tech",
  loves: "coding",
  habbits: {
    smoking: false,
    drinking: true,
  },
  skills: ["js", "html", "css"],
  marks: [
    {
      subject: "maths",
      marks: 90,
    },
    {
      subject: "science",
      marks: 80,
    },
  ],
};

let result1 = shallowMerge(obj1, obj2);
console.log(result1);
```

**Implementation (Deep Merge) - I**

```tsx
function deeepMerge(...args) {
  let target = {};

  function merge(target, source) {
    for (let key in source) {
      if (!source.hasOwnProperty(key)) continue;

      if (Object.prototype.toString.call(source[key]) === "[object Object]") {
        target[key] = merge(target[key] || {}, source[key]);
        continue;
      }

      if (Array.isArray(source[key])) {
        for (let item of source[key]) {
          target[key] = target[key] || [];

          if (Object.prototype.toString.call(item) === "[object Object]") {
            target[key].push(merge({}, item));
          } else {
            target[key].push(item);
          }
        }
        continue;
      }

      target[key] = source[key];
    }
    return target;
  }

  for (let i = 0; i < args.length; i++) {
    let source = args[i];
    merge(target, source);
  }

  return target;
}

let obj1 = {
  name: "John",
  age: 30,
  details: {
    address: "USA",
    phone: 1234567890,
  },
};

let obj2 = {
  qualification: "B.Tech",
  loves: "coding",
  habbits: {
    smoking: false,
    drinking: true,
  },
  skills: ["js", "html", "css"],
  marks: [
    {
      subject: "maths",
      marks: 90,
    },
    {
      subject: "science",
      marks: 80,
    },
  ],
};

let result2 = deeepMerge(obj1, obj2);
obj2.marks[0].marks = 100;
console.log(obj2);
console.log(result2);
```