module.exports = function reverse(list) {
  if (list != null && list.constructor.name === 'Array') {
    return list.slice().reverse();
  }
  if (typeof list !== 'string') {
    return list;
  }
  let newSt = '';
  for (let i = list.length - 1; i >= 0; i--) {
    newSt += list[i];
  }
  return newSt;
};
