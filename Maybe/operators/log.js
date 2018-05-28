module.exports = function log(msg = '') {
  return Fx => {
    const x = Fx();
    let toPrint;
    let name = 'Just';
    if (typeof x === 'function') {
      toPrint = `Function ${x}`;
    } else {
      if (x == null) {
        toPrint = '';
        name = 'Nothing';
      } else {
        toPrint = `${x.constructor.name} ${JSON.stringify(x)}`;
      }
    }
    console.log(`${msg}${name} ${toPrint}`);
    return x == null ? () => { } : () =>  x;
  };
};
