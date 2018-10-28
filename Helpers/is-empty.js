module.exports = function isEmpty(v) {
  if (!v) {
    return true;
  }
  if (v.constructor.name === 'Object') {
    return Object.keys(v).length === 0;
  }
  if (v.constructor.name === 'Array' || typeof v === 'string') {
    return v.length === 0;
  }
  return false;
};
