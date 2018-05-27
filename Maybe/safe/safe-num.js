const { Just, Nothing } = require('../union');

module.exports = function safeNum(x) {
  return typeof x === 'number' && isFinite(x) ? Just(x) : Nothing();
};
