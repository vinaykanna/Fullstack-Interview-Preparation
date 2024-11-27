**Implementation - I**

```tsx
function deepClonse(source) {
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

  merge(target, source);

  return target;
}

let obj = {
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

let obj2 = deepClonse(obj);
obj.qualification = "B.Pharm";
obj.marks[0].marks = 100;
console.log(obj);
console.log(obj2);
```