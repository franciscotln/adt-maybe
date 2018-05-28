const safeArray = a => a != null && a.constructor === Array ? function Just() { return a; } : function Nothing() { };

module.exports = safeArray;
