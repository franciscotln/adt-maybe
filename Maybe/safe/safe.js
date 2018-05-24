const { Just, Nothing } = require('../union');

module.exports = function safe(pred) {
  return x => x != null && pred(x) ? Just(x) : Nothing();
};
