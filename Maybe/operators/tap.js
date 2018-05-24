module.exports = function tap(f) {
  return Fx => {
    f(Fx());
    return Fx;
  }
};
