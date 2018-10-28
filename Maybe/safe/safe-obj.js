module.exports = o => () => o != null && (o.constructor === Object || !o.constructor) ? o : void 0;
