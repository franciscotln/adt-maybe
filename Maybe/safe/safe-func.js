const { Just, Nothing } = require('../union');

module.exports = function safeFunc(f) {
  return typeof f === 'function' ? Just(f) : Nothing();
};
