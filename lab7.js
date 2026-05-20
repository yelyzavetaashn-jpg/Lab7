class EventBus {
  constructor() {
    this.listeners = {};
  }
}
subscribe(eventName, listener) {
  if (!this.listeners[eventName]) {
    this.listeners[eventName] = [];
  }

  this.listeners[eventName].push(listener);
}
unsubscribe(eventName, listener) {
  if (!this.listeners[eventName]) {
    return;
  }

  this.listeners[eventName] =
    this.listeners[eventName].filter(
      currentListener => currentListener !== listener
    );
}
emit(eventName, data) {
  if (!this.listeners[eventName]) {
    return;
  }

  for (const listener of this.listeners[eventName]) {
    listener(data);
  }
}
const bus = new EventBus();

function notificationListener(message) {
  console.log(
    "Notification system received:",
    message
  );
}

function analyticsListener(message) {
  console.log(
    "Analytics system processed:",
    message
  );
}

bus.subscribe("userLoggedIn", notificationListener);
bus.subscribe("userLoggedIn", analyticsListener);

bus.emit(
  "userLoggedIn",
  { username: "Yelyzaveta" }
);

bus.unsubscribe(
  "userLoggedIn",
  analyticsListener
);

console.log("After unsubscribe:");

bus.emit(
  "userLoggedIn",
  { username: "Admin" }
);