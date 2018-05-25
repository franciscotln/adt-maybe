const { Just, Nothing } = require('../union');

module.exports = function map(f) {
  return Fx => {
    const x = Fx();
    const y = f(x);
    return x == null || y == null ? Nothing() : Just(y);
  };
};
