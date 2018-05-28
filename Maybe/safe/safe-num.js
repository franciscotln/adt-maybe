const safeNum = x => typeof x === 'number' && isFinite(x) ? () => x : () => { };

module.exports = safeNum;
