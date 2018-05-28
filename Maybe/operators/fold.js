const fold = (nF, jF) => Mx => {
  const x = Mx();
  return x == null ? nF() : jF(x);
};

module.exports = fold;
