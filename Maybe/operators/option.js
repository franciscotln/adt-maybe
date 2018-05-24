module.exports = function option(defVal) {
  return Fx => {
    const x = Fx();
    return x == null ? defVal : x;
  };
};
