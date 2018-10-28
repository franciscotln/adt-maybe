module.exports = function propPath(pathToProp) {
  let seek = pathToProp;
  if (typeof pathToProp === 'string') {
    seek = pathToProp.split('.').map(s => s.trim()).filter(Boolean);
  }
  return obj => {
    if (obj == null) return;
    let v = obj[seek[0]];
    for (let i = 1; i < seek.length; i++) {
      v = (v || {})[seek[i]];
    }
    return v;
  };
};
