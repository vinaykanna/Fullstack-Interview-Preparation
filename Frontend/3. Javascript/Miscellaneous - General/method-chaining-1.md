```tsx
const calculator = {
  total: 0,
  add(value) {
    this.total += value;
    return this;
  },
  substract(value) {
    this.total -= value;
    return this;
  },
  multiply(value) {
    this.total *= value;
    return this;
  },
  divide(value) {
    this.total /= value;
    return this;
  },
  reset() {
    this.total = 0;
  },
};

calculator.add(10).multiply(5).substract(12).divide(2);
console.log(calculator.total);
calculator.reset();
console.log(calculator.total);
```