const { Just, Nothing } = require('../union');

module.exports = function fromNullable(x) {
  return x == null ? Nothing() : Just(x);
};
