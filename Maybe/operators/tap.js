const tap = f => Fx => () => {
  const x = Fx();
  if (x != null) f(x);
  return x;
};

module.exports = tap;
