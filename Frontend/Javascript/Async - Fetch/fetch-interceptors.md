**Implementation - I**

```tsx
let originalFetch = fetch;

window.requestInterceptor = (args) => {
  return args;
};

window.responseInterceptor = (args) => {
  return args;
};

window.fetch = async (...args) => {
  args = window.requestInterceptor(args);
  let response = await originalFetch(...args);
  response = window.responseInterceptor(response);
  return response;
};

window.requestInterceptor = (args) => {
  return args;
};

window.responseInterceptor = (args) => {
  console.log("Response Interceptor");
  return args.json();
};

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
```