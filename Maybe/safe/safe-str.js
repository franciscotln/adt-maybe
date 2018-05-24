const { Just, Nothing } = require('../union');

module.exports = function safeStr(s) {
  return typeof s === 'string' ? Just(s) : Nothing();
};
