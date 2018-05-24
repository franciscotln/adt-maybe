const fromNullable = require('../factory/from-nullable');

module.exports = function safeMap(f) {
  return Fx => {
    let x;
    try {
      x = f(Fx());
    } catch (e) {

    }
    return fromNullable(x);
  }
};
