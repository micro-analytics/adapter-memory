const Observable = require("zen-observable");

let data = {};

let handlers = [];

const observable = new Observable(observer => {
  handlers.push(data => observer.next(data));
  let index = handlers.length;
  return () => {
    handlers = [...handlers.slice(0, index), ...handlers.slice(index)];
  };
});

function get(key) {
  return Promise.resolve(data[key]);
}

function put(key, value) {
  data[key] = value;
  handlers.forEach(handler => {
    handler({key, value});
  })
  return Promise.resolve();
}

function getAll() {
  return Promise.resolve(data);
}

function has(key) {
  return Promise.resolve({}.hasOwnProperty.call(data, key));
}

function keys() {
  return Promise.resolve(Object.keys(data));
}

function clear() {
  data = {};
}

function subscribe(listener) {
  return observable.subscribe(listener);
}

module.exports = { get, put, getAll, has, keys, clear, subscribe };
