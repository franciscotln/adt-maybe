const safeInt = x => typeof x === 'number' && isFinite(x) && Math.floor(x) === x ?
  function Just() { return x; } :
  function Nothing() { };

module.exports = safeInt;
