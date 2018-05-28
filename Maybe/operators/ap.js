const ap = Fx => Ff => {
  const x = Fx();
  const f = Ff();
  const y = x != null && typeof f === 'function' ? f(x) : void 0;
  return () => y;
};

module.exports = ap;
