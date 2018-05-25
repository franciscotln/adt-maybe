const { Just, Nothing } = require('../union');

module.exports = function safeChain(f) {
  return Fx => {
    let x;
    let Fy;
    let y;
    try {
      x = Fx();
      Fy = f(x)
      y = Fy();
    } catch (e) {

    }
    return x == null || y == null ? Nothing() : Just(y);
  };
};
