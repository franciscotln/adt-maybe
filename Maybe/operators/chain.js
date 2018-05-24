const fromNullable = require('../factory/from-nullable');

module.exports = function chain(f) {
  return Fx => fromNullable(f(Fx())());
};
