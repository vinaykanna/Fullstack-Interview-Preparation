Implement a function minBy(array, iteratee) that finds the element inside array
with the minimum value after going through iteratee.

The function should ignore elements where iteratee produces **null** or **undefined**.

```tsx
export default function minBy<T>(
  array: Array<T>,
  iteratee: (value: T) => any
): any {
  let result;

  for (let i = 0; i < array.length; i++) {
    if (iteratee(array[i]) === null || iteratee(array[i]) === undefined) {
      continue;
    }

    if (result === undefined) {
      result = array[i];
      continue;
    }

    if (iteratee(array[i]) < iteratee(result)) {
      result = array[i];
    }
  }

  return result;
}

// minBy([4, 2, 8, 6], x => x)
// => 2

// minBy([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], 'n')
// => { 'n': 2 }
```
