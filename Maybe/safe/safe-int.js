const { Just, Nothing } = require('../union');

module.exports = function safeInt(x) {
  return typeof x === 'number' && isFinite(x) && Math.floor(x) === x ? Just(x) : Nothing();
};
