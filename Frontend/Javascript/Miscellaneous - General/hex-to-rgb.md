**Implementation - I**

```tsx
function fullHex(hex) {
  let r = hex.slice(1, 2);
  let g = hex.slice(2, 3);
  let b = hex.slice(3, 4);

  r = parseInt(r + r, 16);
  g = parseInt(g + g, 16);
  b = parseInt(b + b, 16);

  return `rgb(${r}, ${g}, ${b})`;
}

function convert(value) {
  if (value.length === 4) {
    return fullHex(value);
  } else if (value.length === 7) {
    let r = value.slice(1, 3);
    let g = value.slice(3, 5);
    let b = value.slice(5, 7);

    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);

    return `rgb(${r}, ${g}, ${b})`;
  } else {
    return "Invalid Hex";
  }
}

console.log(convert("#000"));
```