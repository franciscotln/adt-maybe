const caseDo = pattern => Mx => {
  if (pattern == null || typeof pattern.Nothing !== 'function' || typeof pattern.Just !== 'function') {
    throw 'Union type not fully handled. Add cases for both (Just a | Nothing)';
  }
  const x = Mx();
  return x == null ? pattern.Nothing() : pattern.Just(x);
};

module.exports = caseDo;
