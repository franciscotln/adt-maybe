const safeInt = x => typeof x === 'number' && isFinite(x) && Math.floor(x) === x ? () => x : () => { };

module.exports = safeInt;
