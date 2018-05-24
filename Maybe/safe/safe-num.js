const { Just, Nothing } = require('../union');

module.exports = function safeNum(x) {
  return x != null && !isNaN(x) && isFinite(x) && x.constructor.name === 'Number' ? Just(x) : Nothing();
};
