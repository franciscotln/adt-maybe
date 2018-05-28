const fromNullable = x => x == null ? () => { } : () => x;

module.exports = fromNullable;
