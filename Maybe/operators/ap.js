const fromNullable = require('../factory/from-nullable');

module.exports = function ap(Fx) {
  return Ff => {
    const x = Fx();
    const f = Ff();
    const v = x != null && typeof f === 'function' ? f(x) : null;
    return fromNullable(v);
  };
};
