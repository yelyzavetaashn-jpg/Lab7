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