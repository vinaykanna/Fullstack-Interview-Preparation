**Implementation - I**

```tsx
function mostFrequent(arr) {
  // your code goes here
   let map = new Map();

  for (let item of arr) {
    let value = map.get(item) || 0;
    map.set(item, value + 1);
  }

  const frequencyArr = [...map.entries()];

  let max = {
    value: frequencyArr[0][0],
    count: frequencyArr[0][1],
  };

  for (let i = 1; i < frequencyArr.length; i++) {
    if (frequencyArr[i][1] >= max.count) {
      max = {
        value: frequencyArr[i][0],
        count: frequencyArr[i][1],
      };
    }
  }
  
  return max.value;
};
```