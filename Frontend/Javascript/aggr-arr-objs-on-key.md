**Implementation - I**

```tsx
function aggregate(arr, aggrKey, aggrVal) {
  let result = [];

  arr.forEach((item) => {
    let foundInd = result.findIndex((it) => it[aggrKey] === item[aggrKey]);
    if (foundInd > -1) {
      result[foundInd] = {
        ...result[foundInd],
        [aggrVal]: [...result[foundInd][aggrVal], item[aggrVal]],
      };
    } else {
      result.push({
        [aggrKey]: item[aggrKey],
        [aggrVal]: [item[aggrVal]],
      });
    }
  });

  return result;
}

let result3 = aggregate(
  [
    { name: "vinay", skill: "HTML" },
    { name: "kishan", skill: "REACT" },
    { name: "naveen", skill: "Angular" },
    { name: "vinay", skill: "HTML" },
  ],
  "skill",
  "name"
);

console.log(result3);
```