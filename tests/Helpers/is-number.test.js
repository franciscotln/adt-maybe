const test = require('tape');
const isNumber = require('../../Helpers/is-number');

test('returns true if the input is a finite number', (t) => {
  const allNumbers = [-1, 0, 1.618].every(isNumber);
  t.true(allNumbers);
  t.end();
});

test('returns false if the input is NaN, Infinity or not an instance of the Number constructor', (t) => {
  const noneIsNumber = [null, undefined, '0', Infinity, NaN].every(input => !isNumber(input));
  t.true(noneIsNumber);
  t.end();
});
