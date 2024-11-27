There's a computer with a hard drive that's partitioned into several partitions.
The data needs to be moved around so that the minimum number of partitions are being used.
Given how much space is currently being used on each partition, as well as the total capacity of each, what's the minimum number of partitions needed to hold all the data if it's moved around optimally?

Example:
used = [3, 2, 1, 3, 1]
totalCapcity = [3, 5, 3, 5, 5]

The data can be moved around like so:
- Move all the data(3 units of space) from the first partition to the second, this would empty the first partition, and the second partition would then be at full capacity.
- Move the data from the third partition (1 unit) and and fifth parition (1 unit) into the fourth partition and the fourth partition would then be at full capacity.
- Finally, the data has been moved around optimally.

output: 2

**Implementation**

```tsx
function consPartitions(used: number[], totalCapacity: number[]) {
  totalCapacity.sort();
  totalCapacity.reverse();

  let totalSum = used.reduce((item, acc) => acc + item, 0);
  let count = 0;

  for (let i = 0; i < totalCapacity.length; i++) {
    totalSum = totalSum - totalCapacity[i];
    count++;

    if (totalSum <= 0) {
      break;
    }
  }

  return count;
}

const result = consPartitions([2, 2, 3], [3, 3, 3]);
console.log({ result });
```
