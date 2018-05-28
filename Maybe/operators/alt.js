const alt = Fy => Fx => {
  const x = Fx();
  return x == null ? Fy : () => x;
}

module.exports = alt;
