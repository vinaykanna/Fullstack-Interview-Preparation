**Implementation** 

```tsx
const deepFlatten = (obj) => {
  let result = {};

  const flatten = (obj, prefix = "") => {
    for (let key in obj) {
      let value = obj[key];
      let presentPrefix = prefix ? prefix + "." + key : key;

      if (value === null || value === undefined) {
        continue;
      }

      if (Array.isArray(value)) {
        let arrObj = { ...value };
        flatten(arrObj, presentPrefix);
        continue;
      }

      if (typeof value == "object") {
        flatten(value, presentPrefix);
        continue;
      }

      result[presentPrefix] = value;
    }
  };

  flatten(obj);

  return result;
};

let obj = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
      S: {
        T: 100,
        U: 200,
        V: undefined,
        W: [
          {
            X: 1000,
            Y: 1000,
          },
        ],
      },
    },
    Q: [1, 2],
  },
  Z: ["a", "b"],
};

console.log(deepFlatten(obj));
```