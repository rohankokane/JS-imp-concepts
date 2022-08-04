let events = {};

function subscribe(eventName, cb) {
  events[eventName] = events[eventName] || [];
  events[eventName].push(cb);
  const indexOfEvent = events[eventName].length - 1;
  console.log(events);
  return {
    unsubscribe: function () {
      return events[eventName].splice(indexOfEvent, 1);
    }
  };
}
function publish(eventName, data) {
  if (events[eventName]) {
    events[eventName].forEach((callback) => callback(data));
  }
}
export { subscribe, publish };
