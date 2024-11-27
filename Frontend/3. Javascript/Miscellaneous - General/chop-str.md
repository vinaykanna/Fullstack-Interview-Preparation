**Implementation** 

```tsx
function chunk(arr, size) {
  let result = [];
  let start = 0;

  while (start < arr.length) {
    result.push(arr.slice(start, start + size));
    start += size;
  }

  return result;
}

let arr = [2, 5, 1, 10, 34, 12, 6, 7, 9];
console.log(chunk(arr, 4));
```

**Implementation - II**

```tsx
const chunk = (str, size = str.length) => {
  return str.match(new RegExp(".{1," + size + "}", "g"));
};

let str = "javascript";
console.log(chunk(str, 4));
```