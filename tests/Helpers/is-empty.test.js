const test = require('tape');
const isEmpty = require('../../Helpers/is-empty');

test('returns true for falsy values', (t) => {
  const inputs = [false, 0, NaN, null, undefined];
  const allEmpty = inputs.every(isEmpty);
  t.true(allEmpty);
  t.end();
});

test('returns false for arrays, strings and objects that are not empty', (t) => {
  const inputs = [[1], '1', { name: '' }];
  const noneIsEmpty = inputs.every(input => !isEmpty(input));
  t.true(noneIsEmpty);
  t.end();
});
