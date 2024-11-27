export default class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, listener) {
    const listeners = this.events[eventName] || [];
    listeners.push(listener);
    this.events[eventName] = listeners;

    return this;
  }

  off(eventName, listener) {
    const listeners = this.events[eventName] || [];
    const index = listeners.indexOf(listener);

    if (index > -1) {
      listeners.splice(index, 1);
      this.events[eventName] = listeners;
    }

    return this;
  }

  emit(eventName, ...args) {
    if (!Object.hasOwn(this.events, eventName)) return false;

    const listeners = this.events[eventName] || [];

    listeners.forEach((listener) => {
      listener(...args);
    });

    return !!listeners.length;
  }
}

const eventEmitter = new EventEmitter();

eventEmitter.on("event", (...args) => {
  console.log(...args);
});

eventEmitter
  .on("event", (...args) => {
    console.log("subscriber1", ...args);
  })
  .on("event", (...args) => {
    console.log("subscriber2", ...args);
  });

const subscriber = (...args) => {
  console.log("subscriber3", ...args);
};

eventEmitter.on("event", subscriber);

eventEmitter.emit("event", 1, 2, 3);

eventEmitter.off("event", subscriber);

eventEmitter.emit("event", 4, 5, 6);
