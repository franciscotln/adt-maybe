module.exports = x => () => typeof x === 'number' && isFinite(x) && Math.floor(x) === x ? x : void 0;
