**Implementation - I**

```tsx
function get(obj, path) {
  let keys = path
    .replaceAll("[", ".")
    .replaceAll("]", ".")
    .split(".")
    .filter(Boolean);

  return keys.reduce((acc, curr) => acc[curr], obj);
}

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
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

console.log(get(obj, "a.b.c[2]"));
console.log(get(arr, "[0].name"));
```

**Implementation - II**

```tsx
function get(obj, path) {
  let keys = path
    .replaceAll("[", ".")
    .replaceAll("]", ".")
    .split(".")
    .filter(Boolean);

  let current = obj;

  for (let key of keys) {
    current = current[key];

    if (current == undefined) {
      return undefined;
    }
  }

  return current;
}

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
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

console.log(get(obj, "a.b.c[2]"));
console.log(get(arr, "[0].name"));
```