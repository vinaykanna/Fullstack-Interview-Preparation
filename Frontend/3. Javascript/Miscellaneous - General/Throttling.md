Throttling implies limiting the number of times a function gets called in a certain time period. It will prohibit a function from executing if we have invoked it “recently.” Throttling also guarantees that a function runs at a consistent rate.

**Basic Implementation - I:**

```tsx
function throttle(func, delay) {
  let last = 0;

  return (...args) => {
    let now = Date.now();
    if (now - last < delay) return;
    last = now;
    func(...args);
  };
}

//==========================
var button = document.getElementById("button");

let throttled = throttle(function (e) {
    console.log("Button clicked");
}, 2000);

button.addEventListener("click", throttled);
```

**Basic Implementation - II:**

```tsx
function throttle(func, delay) {
  let shouldWait = false;

  return function (...args) {
    if (shouldWait) return;

    func(...args);

    shouldWait = true;

    // once the delay has passed, set shouldWait to false
    // so that the next time the function is called, it will execute again
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}

//==========================
var button = document.getElementById("button");

let throttled = throttle(function (e) {
    console.log("Button clicked");
}, 2000);

button.addEventListener("click", throttled);
```

Here we can notice that our second call to the throttled function doesn't run until 1,200 milliseconds later. That is 200 milliseconds after our delay. Now depending on your throttle needs this may be fine, but in most cases you want to queue up any action that occurs in your throttle so that as soon as your delay is over it will call the previous iteration of the function.

here only difference is we are now storing the previous `args` in a variable called `waitingArgs` if throttle is called during the delay. Then when our delay ends we check to see if we have any `waitingArgs`. If we do not we just do everything as normal and set `shouldWait` to false so we can wait for the next trigger. If we do have `waitingArgs`, though, that means we called throttle during the delay and we want to trigger our function with those `waitingArgs` and then reset our timer.

**Advanced Implementation - I**

```tsx
function throttle(func, delay) {
  let shouldWait = false;
  let waitingArgs = null;

  return function (...args) {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    func(...args);

    shouldWait = true;

    const timeOutFunc = () => {
      if (waitingArgs === null) {
        shouldWait = false;
      } else {
        func(waitingArgs);
        waitingArgs = null;
        setTimeout(timeOutFunc, delay);
      }
    };

    setTimeout(timeOutFunc, delay);
  };
}

//==========================
var button = document.getElementById("button");

let throttled = throttle(function (e) {
    console.log("Button clicked");
}, 2000);

button.addEventListener("click", throttled);
```

**Advanced Implementation - II**

```tsx
const throttle = (func, limit) => {
  // track the timerid and time
  let lastFunc;
  let lastRan;

  return function () {
    // capture the context and arguments
    const context = this;
    const args = arguments;
    // if not yet run, run it once
    console.log("lastRan", lastRan);

    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      // reset the timer
      clearTimeout(lastFunc);
      // start it again

      console.log(limit - (Date.now() - lastRan));
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

//==========================
var button = document.getElementById("button");

let throttled = throttle(function (e) {
    console.log("Button clicked");
}, 2000);

button.addEventListener("click", throttled);
```