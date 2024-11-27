**Implementation - I**

```tsx
const numbers = [5, 2, 9, 5, 6, 3, 2, 8, 1, 3, 7, 4, 8];

let result = [];

for (let i = 0; i < numbers.length; i++){
  let repeated = false
  
  for (let j = 0; j < numbers.length; j++){
    if(i === j){
      continue;
    }
    
    if(numbers[i] === numbers[j]){
      repeated = true;
    }
  }

  if(!repeated){
    result.push(numbers[i])
  }
}

console.log(result)
```

**Implementation - II**

```jsx
const numbers = [5, 2, 9, 5, 6, 3, 2, 8, 1, 3, 7, 4, 8];

let result = [];

outerLoop: for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    if (i === j) {
      continue;
    }

    if (numbers[i] === numbers[j]) {
      continue outerLoop;
    }
  }

  result.push(numbers[i]);
}

console.log(result);
```

**Implementation (Efficient) - III**

```jsx
const numbers = [5, 2, 9, 5, 6, 3, 2, 8, 1, 3, 7, 4, 8];

const frequency = new Map();

for (let i = 0; i < numbers.length; i++) {
  const value = numbers[i];
  const count = frequency.get(value) ?? 0;
  frequency.set(value, count + 1)
}

const result = [];

[...frequency.entries()].forEach(item => {
  if(item[1] === 1){
    result.push(item[0])
  }
})

console.log(result);
```