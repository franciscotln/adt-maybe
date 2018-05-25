const { Just, Nothing } = require('../union');

module.exports = function map(f) {
  return Fx => {
    const x = Fx();
    if (x == null) {
      return Nothing();
    }
    const y = f(x);
    return y == null ? Nothing() : Just(y);
  };
};
