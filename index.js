let data = {};

function get(key) {
  return Promise.resolve(data[key]);
}

function put(key, value) {
  data[key] = value;
  return Promise.resolve();
}

function getAll(options) {
  return data;
}

function has(key) {
  return Promise.resolve({}.hasOwnProperty.call(data, key));
}

function keys() {
  return Object.keys(data);
}

function clear() {
  data = {};
}

module.exports = { get: get, put: put, has: has, keys: keys, getAll: getAll, clear: clear };
