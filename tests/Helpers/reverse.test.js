const test = require('tape');
const reverse = require('../../Helpers/reverse');

test('reverses an array', (t) => {
  t.same([3, 2, 1], reverse([1, 2, 3]));
  t.end();
});

test('reverses a string', (t) => {
  t.equals('tset', reverse('test'));
  t.end();
});

test('returns the same value if it is not a string or an array', (t) => {
  t.equals(12, reverse(12));
  t.end();
});
