const lazy = f => {
  if (f == null || typeof f !== 'function') {
    throw new TypeError('Constructor Maybe.lazy must receive a function that returns a value');
  }
  return () => f();
};

module.exports = lazy;
