```tsx
function computeAmount() {
  return {
    total: 0,
    lacs(value) {
      this.total += value * 100000;
      return this;
    },
    crores(value) {
      this.total += value * 10000000;
      return this;
    },
    thousand(value) {
      this.total += value * 1000;
      return this;
    },
    value() {
      return this.total;
    },
    reset() {
      this.total = 0;
    },
  };
}

let result = computeAmount().crores(1).lacs(12).thousand(15).value();
console.log(result);
computeAmount().reset();
console.log(result);
```