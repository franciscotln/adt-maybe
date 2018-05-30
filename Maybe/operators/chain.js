const chain = f => Fx => () => {
  const x = Fx();
  if (x != null) return f(x)();
};

module.exports = chain;
