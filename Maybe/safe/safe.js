module.exports = predicate => x => () => {
  if (typeof predicate !== 'function') {
    throw new Error('Predicate must be a function');
  }
  return x != null && predicate(x) ? x : void 0;
};
