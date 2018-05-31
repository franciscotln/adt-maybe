const ap = Fx => Ff => () => {
  const x = Fx();
  const f = Ff();
  if (x != null && typeof f === 'function') return f(x);
};

module.exports = ap;
