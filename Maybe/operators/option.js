const option = defVal => Fx => {
  const x = Fx();
  return x == null ? defVal : x;
};

module.exports = option;
