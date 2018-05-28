const safeStr = s => typeof s === 'string' ? () => s : () => { };

module.exports = safeStr;
