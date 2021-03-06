const test = require('tape');
const tap = require('../../../Maybe/operators/tap');

test('calls a tapping function and returns the same Maybe(v) if the input is Maybe(v),', (t) => {
  const Just2 = () => 2;
  const Nothing = () => null;

  t.equals(2, tap(x => {
    t.equals(2, x);
  })(Just2)());

  t.equals(null, tap(x => {
    t.equals(null, x);
  })(Nothing)());
  t.end();
});

test('should not call the tapping function if the input is a Nothing()', (t) => {
  const Nothing = () => {};
  let calls = 0;

  tap(() => calls++)(Nothing)();

  t.equals(0, calls);
  t.end();
});
