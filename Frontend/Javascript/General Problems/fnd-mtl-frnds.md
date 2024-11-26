**Implementation - I**

```tsx
function findMutalFriends(allFrnds, person) {
  let result = [];

  const helper = (obj, key) => {
    if (obj[key]) {
      result.push(...obj[key]);

      for (let item of obj[key]) {
        helper(obj, item);
      }
    }
  };

  helper(obj, "a");

  return result;
}

let obj = {
  a: ["b", "c"],
  b: ["d", "g"],
  d: ["p", "q"],
  l: ["x", "y"],
};

let mutualFrnds = findMutalFriends(obj, "a");
console.log(mutualFrnds);
```

**Implementation - II**

```tsx
function findMutalFriends(allFrnds, person) {
  let friends = allFrnds[person];

  if (friends && friends.length > 0) {
    let finalList = [...friends];

    for (let friend of friends) {
      const mutualFriendsList = findMutalFriends(allFrnds, friend);
      finalList.push(...mutualFriendsList);
    }

    return finalList;
  }

  return [];
}

let obj = {
  a: ["b", "c"],
  b: ["d", "g"],
  d: ["p", "q"],
  l: ["x", "y"],
};

let mutualFrnds = findMutalFriends(obj, "a");
console.log(mutualFrnds);
```