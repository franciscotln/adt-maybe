const { Just, Nothing } = require('../union');

module.exports = function safeObj(o) {
  return o != null && o.constructor.name === 'Object' ? Just(o) : Nothing();
};
