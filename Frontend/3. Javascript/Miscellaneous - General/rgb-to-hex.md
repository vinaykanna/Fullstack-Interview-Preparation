**Implementation - I**

```tsx
function convert(r, g, b) {
  let hex = "#";
  hex += r.toString(16).padStart(2, "0");
  hex += g.toString(16).padStart(2, "0");
  hex += b.toString(16).padStart(2, "0");
  return hex;
}

console.log(convert(255, 255, 255));
```