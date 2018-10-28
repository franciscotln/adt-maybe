module.exports = function pipe(...fns) {
  return v0 => {
    if (fns.length === 0) return v0;
    if (fns.length === 1) return fns[0](v0);
    return fns.reduce((v, f) => f(v), v0);
  }
};
