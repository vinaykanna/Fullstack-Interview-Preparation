**Implementation - I**

```tsx
// HTML
<form id="parent">
  <input type="text" name="a.c" value="1" />
   <input type="text" name="a.b.d" value="2" />
   <input type="text" name="b.e" value="3" />
</form>

// JS
let inputs = document.querySelectorAll("input");

function aggregateValues() {
  return Array.from(inputs).reduce((acc, input) => {
    let keys = input.name.split(".");
    let value = input.value;

    let temp = acc;

    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        temp[key] = value;
      } else {
        temp[key] = temp[key] || {};
      }
      temp = temp[key];
    });

    return acc;
  }, {});
}

console.log(aggregateValues());
```

**Implementation - II**

```tsx
// HTML
<form id="parent">
  <input type="text" name="a.c" value="1" />
   <input type="text" name="a.b.d" value="2" />
   <input type="text" name="b.e" value="3" />
</form>

// JS
let inputs = document.querySelectorAll("input");

function aggregateValues() {
  let result = {};

  Array.from(inputs).forEach((input) => {
    let keys = input.name.split(".");
    let value = input.value;

    let current = result;

    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        current[key] = value;
      } else {
        current[key] = current[key] || {};
      }
      current = current[key];
    });
  });

  return result;
}

console.log(aggregateValues());
```