Function.prototype.myBind = function (context = {}, ...IntialArgs) {
  let functObj = this;

  if (typeof functObj !== "function") {
    throw new Error(functObj + " is not callable");
  }

  context.fn = functObj;

  return function (...args) {
    const result = context.fn(...IntialArgs, ...args);
    delete context.fn;
    return result;
  };
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

let result = travel.myBind(details, "hello");
result("AP", "TG");
