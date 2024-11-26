**Implementation - I**

```tsx
function convert(timeStr) {
  let [hours, minutes] = timeStr.split(":");

  let result = "";

  if (+hours > 12) {
    result = +hours - 12 + ":" + minutes + " PM";
  } else if (+hours === 12) {
    result = timeStr + " PM";
  } else if (+hours === 0) {
    result = 12 + ":" + minutes + " AM";
  } else {
    result = timeStr + " AM";
  }

  return result;
}

console.log(convert("17:49"));
```