**Implementation - I**

```tsx
class MyJson {
  static getValue(value) {
    switch (typeof value) {
      case "string":
        return `"${value}"`;

      case "boolean":
        return `${value}`;

      case "number":
        return Number.isFinite(value) ? `${value}` : "null";

      case "function":
        return undefined;

      case "undefined":
        return undefined;

      case "symbol":
        return undefined;

      case "bigint":
        throw new Error("BigInt is not supported");

      case "object":
        if (Array.isArray(value)) {
          return `[${value
            .map((item) => {
              return getValue(item) === undefined ? "null" : getValue(item);
            })
            .join(",")}]`;
        }

        if (value === null) {
          return "null";
        }

        if (value instanceof RegExp) {
          return value.toString();
        }

        if (value instanceof Map) {
          let result = "";

          for (let [key, val] of value) {
            result += `"${key}": ${getValue(val)},`;
          }

          return `{${result.slice(0, -1)}}`;
        }

        if (value instanceof String) {
          return `"${value}"`;
        }

        if (value instanceof Number) {
          return Number.isFinite(value) ? `${value}` : "null";
        }

        if (value instanceof Boolean) {
          return `${value}`;
        }

        if (value instanceof Date) {
          return `"${value.toISOString()}"`;
        }

        return this.stringify(value);
    }
  }

  static stringify(obj) {
    let result = "";

    if (Object.prototype.toString.call(obj) === "[object Object]") {
      for (let key in obj) {
        result += `"${key}":${this.getValue(obj[key])},`;
      }
    } else {
      return this.getValue(obj);
    }

    return `{${result.slice(0, -1)}}`;
  }
}

let map = new Map();
map.set("name", "John");

let obj = {
  name: "John",
  age: 30,
  married: true,
  city: "New York",
  habbits: ["eat", "sleep", "code"],
  address: {
    street: "Main",
    number: 100,
    startDate: new Date(),
  },
  graduateYear: null,
  sayHi: function () {
    console.log("Hi");
  },
  marks: [
    {
      subject: "Math",
      mark: 5,
    },
    {
      subject: "English",
      mark: 4,
    },
  ],
  map,
};

let json = MyJson.stringify(new RegExp("test", "i"));
console.log(json);
```