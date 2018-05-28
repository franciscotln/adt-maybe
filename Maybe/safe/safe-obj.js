const safeObj = o => o != null && o.constructor === Object ? function Just() { return o; } : function Nothing() { };

module.exports = safeObj;
