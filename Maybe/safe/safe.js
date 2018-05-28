const safe = pred => x => x != null && pred(x) ? () => x : () => { };

module.exports = safe;
