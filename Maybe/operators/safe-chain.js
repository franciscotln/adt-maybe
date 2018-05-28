const safeChain = f => Fx => {
  const Nothing = () => { };
  try {
    const x = Fx();
    const Fy = f(x);
    return x == null ? Nothing : Fy;
  } catch (e) {
    return Nothing;
  }
};

module.exports = safeChain;
