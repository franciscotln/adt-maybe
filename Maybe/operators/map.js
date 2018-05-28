const map = f => Fx => {
  const x = Fx();
  return x == null ? () => { } : () => f(x);
};

module.exports = map;
