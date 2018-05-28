const of = x => {
  if (x == null) {
    throw 'Constructor Maybe.of must receive a non-nil value';
  }
  return () => x;
};

module.exports = of;
