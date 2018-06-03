module.exports = function pipeK(...fns) {
  return v0 => {
    const [head, ...tail] = fns;
    let Mx = head(v0);
    for (const f of tail) {
      const x = Mx();
      Mx = () => x != null ? f(x)() : void 0;
    }
    return Mx;
  };
};
