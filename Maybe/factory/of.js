const Just = require('../union/Just');

module.exports = function of(x) {
  return Just(x);
};
