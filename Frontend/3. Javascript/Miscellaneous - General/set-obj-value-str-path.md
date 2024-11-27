**Implementation - I**

```tsx
function helper(obj, keys, value) {
  let [current, ...rest] = keys;

  if (rest.length > 0) {
    if (!obj[current]) {
      const isNumber = `${+rest[0]}` === rest[0];
      obj[current] = isNumber ? [] : {};
    }

    if (typeof obj[current] === "object") {
      obj[current] = helper(obj[current], rest, value);
    }
  } else {
    obj[current] = value;
  }

  return obj;
}

function set(objct, path, value) {
  let keys = path
    .replaceAll("[", ".")
    .replaceAll("]", ".")
    .split(".")
    .filter(Boolean);

  helper(objct, keys, value);

  return objct;
}

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
      q: 18,
    },
  },
  d: [
    {
      e: "sdfd",
      f: "sdfd",
    },
    {
      g: "ze",
      h: "qw",
    },
  ],
};

let arr = [
  {
    name: "vinay",
    skill: "RUST",
  },
  {
    name: "kishan",
    skill: "HTML",
  },
];

set(obj, "a.b.q", 100);
set(arr, "[0].name", "Rakesh");
set(obj, "z.x.s", "sdfdfd");

console.log(obj);
console.log(arr);
```