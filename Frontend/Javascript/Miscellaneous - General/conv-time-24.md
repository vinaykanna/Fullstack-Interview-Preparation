**Implementation - I**

```tsx
function convert(timeStr) {
  let [time, period] = timeStr.split(" ");
  let [hours, minutes] = time.split(":");

  let result = "";

  if (period.toLowerCase() === "am") {
    if (parseInt(hours) === 12) {
      result = "00" + ":" + minutes;
    } else {
      result = time;
    }
  } else {
    if (parseInt(hours) !== 12) {
      result = `${parseInt(hours) + 12}:${minutes}`;
    } else {
      result = time;
    }
  }

  return result;
}

console.log(convert("12:00 PM"));
```