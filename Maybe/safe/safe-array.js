const { Just, Nothing } = require('../union');

module.exports = function safeArray(x) {
  return x != null && x.constructor.name === 'Array' ? Just(x) : Nothing();
};
