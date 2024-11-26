**Implementation(using built in methods) - I**

```tsx
function fuzzySearch(arr, query) {
  return arr.filter((item) => {
    return item.toLowerCase().includes(query.toLowerCase());
  });
}

const strArr = [
  "Doomsayer",
  "Doomguard",
  "Doomhamer",
  "Bane of Doom",
  "Fearsome Doomguard",
  "Dr. Boom",
  "Majordomo",
  "Shadowbomber",
  "Shadowform",
  "Goldshire footman",
];
const query = "sh";
let result = fuzzySearch(strArr, query);
console.log(result);
```

**Implementation(Naive) - II**

```tsx
function fuzzySearch(arr, query) {
  let result = [];

  if (!query) return arr;

  outer: for (let item of arr) {
    let i = 0;
    let j = 0;
    let found = -1;

    while (j < query.length && i < item.length) {
      let itemChar = item[i].toLowerCase();
      let queryChar = query[j].toLowerCase();

      if (itemChar !== queryChar && found > -1) {
        continue outer;
      }

      if (itemChar !== queryChar) {
        i++;
        continue;
      }

      if (itemChar === queryChar) {
        found = i;
        i++;
        j++;
      }
    }

    let cannotAdd = found === item.length - 1 && j - 1 < query.length - 1;

    if (found > -1 && !cannotAdd) {
      result.push(item);
    }
  }

  return result;
}

const strArr = [
  "Doomsayer",
  "Doomguard",
  "Doomhamer",
  "Bane of Doom",
  "Fearsome Doomguard",
  "Dr. Boom",
  "Majordomo",
  "Shadowbomber",
  "Shadowform",
  "Goldshire footman",
];
const query = "ma";
let result = fuzzySearch(strArr, query);
console.log(result);
```