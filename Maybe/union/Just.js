const Just = x => {
  if (x == null) {
    throw 'Constructor Maybe.Just must receive a non-nil value';
  }
  return () => x;
};

module.exports = Just;
