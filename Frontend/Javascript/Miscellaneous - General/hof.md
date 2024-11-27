**Implementation - I**

```tsx
function component(firstName, lastName, fullName) {
  console.log(firstName, lastName, fullName);
}

function withFullName(component) {
  return function (...args) {
    component({
      ...args,
      fullName: `${args[0]} ${args[1]}`,
    });
  };
}

const withFullNameComponent = withFullName(component);

withFullNameComponent("John", "Doe");
```