module.exports = function fold(nF, jF) {
  return Mx => {
    const x = Mx();
    return x == null ? nF() : jF(x);
  };
};
