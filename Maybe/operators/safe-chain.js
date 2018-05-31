const safeChain = f => Fx => () => {
  try {
    const x = Fx();
    if (x != null) return f(x)();
  } catch (e) {}
};

module.exports = safeChain;
