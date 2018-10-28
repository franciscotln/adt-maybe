module.exports = x => () => typeof x === 'number' && isFinite(x) ? x : void 0;
