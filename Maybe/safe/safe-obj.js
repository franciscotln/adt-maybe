const safeObj = o => o != null && o.constructor === Object ? () => o : () => { };

module.exports = safeObj;
