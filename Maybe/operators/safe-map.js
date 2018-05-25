const { Just, Nothing } = require('../union');

module.exports = function safeMap(f) {
  return Fx => {
    let x;
    let y;
    try {
      x = Fx();
      y = f(x);
    } catch (e) {

    }
    return x == null || y == null ? Nothing() : Just(y);
  }
};
