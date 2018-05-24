module.exports = function alt(Fy) {
  return Fx => Fx() == null ? Fy : Fx;
};
