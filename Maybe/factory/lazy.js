module.exports = f => {
  if (typeof f !== 'function') {
    throw new TypeError('Constructor Maybe.lazy must receive a function that returns a value');
  }
  return () => f();
};
