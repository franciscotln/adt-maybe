module.exports = function isObject(o) {
  return o != null && o.constructor.name === 'Object';
};
