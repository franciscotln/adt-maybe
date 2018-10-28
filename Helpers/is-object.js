module.exports = function isObject(o) {
  return o != null && (o.constructor && o.constructor.name === 'Object' || !o.constructor);
};
