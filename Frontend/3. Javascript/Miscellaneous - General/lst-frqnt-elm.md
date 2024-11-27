**Implementation - I**

```tsx
function leastFrequent(arr: number[]) {
	let map = new Map();

  for (let item of arr) {
    let value = map.get(item) || 0;
    map.set(item, value + 1);
  }

  const frequencyArr = [...map.entries()];

  let min = {
    value: frequencyArr[0][0],
    count: frequencyArr[0][1],
  };

  for (let i = 1; i < frequencyArr.length; i++) {
    if (frequencyArr[i][1] <= min.count) {
      min = {
        value: frequencyArr[i][0],
        count: frequencyArr[i][1],
      };
    }
  }

  return min.value;
}

const least = leastFrequent([2, 2, 2, 3, 3, 3, 4, 4, 4, 2, 5, 5, 5, 6, 6]);
console.log(least);
```