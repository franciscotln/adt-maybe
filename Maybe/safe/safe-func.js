const safeFunc = f => typeof f === 'function' ? function Just() { return f; } : function Nothing() { };

module.exports = safeFunc;
