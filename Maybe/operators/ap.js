const ap = Fx => Ff => {
  const x = Fx();
  const f = Ff();
  const y = x != null && typeof f === 'function' ? f(x) : null;
  return y == null ? () => { } : () => y;
};

module.exports = ap;
