function limit(fn: (...args: any[]) => any, count: number) {
  let initialCount = 0;

  return function inner(...args: any[]) {
    if (initialCount < count) {
      initialCount++;
      return fn(...args);
    }
  };
}

function myFun() {
  console.log("I am being invoked");
}

const limitedFn = limit(myFun, 2);

limitedFn();
limitedFn();
limitedFn(); // will not be invoked
limitedFn(); // will not be invoked
