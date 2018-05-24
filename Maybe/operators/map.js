const fromNullable = require('../factory/from-nullable');

module.exports = function map(f) {
  return Fx => fromNullable(f(Fx()));
};
