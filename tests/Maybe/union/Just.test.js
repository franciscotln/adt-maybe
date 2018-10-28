const test = require('tape');
const Just = require('../../../Maybe/union/Just');

test('returns a function that returns just a value', (t) => {
  t.equals(Just('a')(), 'a');
  t.end();
});

test('throws an error if the constructor is called with a nil value', (t) => {
  t.throws(() => Just(undefined)(), null, 'non-nil argument is required');
  t.throws(() => Just(null)(), null, 'non-nil argument is required');
  t.throws(() => Just()(), null, 'non-nil argument is required');
  t.end();
});
