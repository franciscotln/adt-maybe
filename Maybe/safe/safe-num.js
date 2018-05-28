const safeNum = x => typeof x === 'number' && isFinite(x) ? function Just() { return x; } : function Nothing() { };

module.exports = safeNum;
