module.exports = a => () => a != null && a.constructor === Array ? a : void 0;
