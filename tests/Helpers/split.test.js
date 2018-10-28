const test = require('tape');
const split = require('../../Helpers/split');

test('it splits a string into an array', (t) => {
  t.same(split()('test'), ['test']);
  t.same(split('')('test'), ['t', 'e', 's', 't']);
  t.same(split('.')('t.e.s.t'), ['t', 'e', 's', 't']);
  t.same(split('')(), []);
  t.same(split()(null), ['']);
  t.end();
});
