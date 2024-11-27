Function.prototype.myApply = function (context = {}, args = []) {
  const functObj = this;

  if (typeof functObj !== "function") {
    throw new Error(functObj + " is not callable");
  }

  if (!Array.isArray(args)) {
    throw new Error("Arguments must be an array");
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

travel.myApply(details, ["hello", "delhi", "mumbai"]);
console.log({ details });
