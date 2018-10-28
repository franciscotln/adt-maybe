const test = require('tape');
const isNil = require('../../Helpers/is-nil');

test('returns true if the input is null or undefined', (t) => {
  const allNil = [null, undefined].every(isNil);
  t.true(allNil);
  t.end();
});

test('returns false if the input is a falsy value different from null or undefined', (t) => {
  const noneIsNil = ['', 0, false, NaN].every(input => !isNil(input));
  t.true(noneIsNil);
  t.end();
});
