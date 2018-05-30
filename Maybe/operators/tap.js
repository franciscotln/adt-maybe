const tap = f => Fx => () => {
  const x = Fx();
  f(x);
  return x;
};

module.exports = tap;
