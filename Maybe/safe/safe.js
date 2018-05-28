const safe = pred => x => x != null && pred(x) ? function Just() { return x; } : function Nothing() { };

module.exports = safe;
