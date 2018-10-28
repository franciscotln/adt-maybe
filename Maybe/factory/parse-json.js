module.exports = str => () => {
  try {
    return JSON.parse(str);
  } catch(e) {}
};
