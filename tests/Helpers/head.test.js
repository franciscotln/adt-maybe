const test = require('tape');
const head = require('../../Helpers/head');

test('should return the first element of any list (Array, String, array like)', (t) => {
  const result = [[null, 'b'], ['a', 'b'], 'hello world'].map(head);
  t.same(result, [null, 'a', 'h']);
  t.end();
});

test('should return the input value if it is a nil value', (t) => {
  const result = [null, undefined, NaN].map(head);
  t.same(result, [null, undefined, undefined]);
  t.end();
});
