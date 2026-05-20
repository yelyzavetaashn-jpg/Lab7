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