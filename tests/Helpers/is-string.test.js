const test = require('tape');
const isString = require('../../Helpers/is-string');

test('returns true if the input is of type String', (t) => {
  const allString = ['', '1', 'a', 'NaN', 'undefined', 'function(){}'].every(isString);
  t.true(allString);
  t.end();
});

test('returns true if the input is of type String', (t) => {
  const noneIsString = [undefined, 1, NaN, null, function(){}].every(input => !isString(input));
  t.true(noneIsString);
  t.end();
});
