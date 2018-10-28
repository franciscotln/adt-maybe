module.exports = f => () => typeof f === 'function' ? f : void 0;
