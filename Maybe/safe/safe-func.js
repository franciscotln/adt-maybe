const safeFunc = f => typeof f === 'function' ? () => f : () => { };

module.exports = safeFunc;
