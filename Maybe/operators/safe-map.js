const safeMap = f => Fx => () => {
  try {
    const x = Fx();
    if (x != null) return f(x);
  } catch (e) {}
};

module.exports = safeMap;
