const test = require('tape');
const isArray = require('../../Helpers/is-array');

test('should return true if the input is an array', (t) => {
  t.true(isArray([]));
  t.end();
});

test('should return false if the input is not an array', (t) => {
  const inputs = ['', null, undefined, {}, NaN, 1, new WeakSet(), new Set(), function(){}];
  const noneIsArray = inputs.every(input => !isArray(input));
  t.true(noneIsArray);
  t.end();
});
