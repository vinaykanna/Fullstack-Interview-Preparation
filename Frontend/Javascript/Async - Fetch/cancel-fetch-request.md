**Implementation - I**

```tsx
async function get({ url, ...props }: any) {
  const abortController = new AbortController();
  const signal = abortController.signal;

  const timeout = setTimeout(() => {
    abortController.abort();
  }, 2000);

  return fetch(url, { ...props, signal })
    .then((res) => {
      clearTimeout(timeout);
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      return res.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (err.name === "AbortError") {
        console.log("Request was canceled");
      }
      throw new Error(err);
    });
}

window.addEventListener("load", () => {
  get({ url: "https://jsonplaceholder.typicode.com/photos" })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
```