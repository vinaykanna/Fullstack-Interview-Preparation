// Implement a function that conditionally joins CSS class names together
// Falsey values should be ignored
// Arrays will be recursively flattened
// Object keys should be joined if their value is truthy
// The returned string should not have any leading or trailing whitespace.
export default function classNames(...args) {
  const result = [];

  const helper = (arg) => {
    if (!arg) return "";

    if (Array.isArray(arg)) {
      for (let argItem of arg) {
        helper(argItem);
      }
    } else if (Object.prototype.toString.call(arg) === "[object Object]") {
      for (let argItem in arg) {
        if (arg.hasOwnProperty(argItem) && arg[argItem]) {
          result.push(argItem);
        }
      }
    } else {
      result.push(arg);
    }
  };

  for (let arg of args) {
    helper(arg);
  }

  return result.join(" ");
}

const result1 = classNames("a", "b", "c", { d: true, e: false, f: true }, [
  "g",
  "h",
  { i: true, j: false, k: true },
]);

console.log(result1);
