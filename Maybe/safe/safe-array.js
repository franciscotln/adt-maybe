const safeArray = a => a != null && a.constructor === Array ? () => a : () => { };

module.exports = safeArray;
