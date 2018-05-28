const safeStr = s => typeof s === 'string' ? function Just() { return s; } : function Nothing() { };

module.exports = safeStr;
