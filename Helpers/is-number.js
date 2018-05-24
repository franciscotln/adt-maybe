module.exports = function isNumber(n) {
  return n != null && !isNaN(n) && isFinite(n) && n.constructor.name === 'Number';
};
