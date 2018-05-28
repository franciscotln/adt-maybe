const safeMap = f => Fx => {
  const Nothing = () => { };
  try {
    const x = Fx();
    const y = f(x);
    return x == null ? Nothing : () => y;
  } catch (e) {
    return Nothing;
  }
};

module.exports = safeMap;
