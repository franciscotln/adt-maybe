const { Just, Nothing } = require('../union');

module.exports = function chain(f) {
  return Fx => {
    const x = Fx();
    const Fy = f(x)
    const y = Fy();
    return x == null || y == null ? Nothing() : Just(y);
  };
};
