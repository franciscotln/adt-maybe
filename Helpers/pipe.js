module.exports = function pipe(...fns) {
  return v0 => fns.reduce((v, f) => f(v), v0);
};
