const { Just, Nothing } = require('../union');

module.exports = function safeMap(f) {
  return Fx => {
    let x;
    let y;
    try {
      x = Fx();
      if (x == null) {
        return Nothing();
      }
      y = f(x);
    } catch (e) {

    }
    return y == null ? Nothing() : Just(y);
  }
};
