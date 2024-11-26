Function.prototype.myCall = function (context = {}, ...args) {
  const functObj = this;

  if (typeof functObj !== "function") {
    throw new Error(functObj + "is not callable");
  }

  context.fn = functObj;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

function travel(greet, from, to) {
  console.log(
    `${greet}, ${this.firstName} ${this.lastName} is going to ${to} from ${from}`
  );
}

let details = {
  firstName: "vinay",
  lastName: "kumar",
};

let result = travel.myCall(details, "hello", "delhi", "mumbai");
console.log({ details });
