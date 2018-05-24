module.exports = function isArray(ar) {
  return ar != null && ar.constructor.name === 'Array';
};
