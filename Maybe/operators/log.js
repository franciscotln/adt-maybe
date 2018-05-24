module.exports = function log(msg = '') {
  return Fx => {
    const x = Fx();
    let toPrint;
    if (typeof x === 'function') {
      toPrint = `Function ${x}`;
    } else {
      toPrint = x == null ? '' : `${x.constructor.name} ${JSON.stringify(x)}`;
    }
    console.log(`${msg}${Fx.name} ${toPrint}`);
    return Fx;
  };
};
