const safeChain = f => Fx => () => {
  try {
    const x = Fx();
    const Fy = f(x);
    if (x != null) return Fy();
  } catch (e) {}
};

module.exports = safeChain;
