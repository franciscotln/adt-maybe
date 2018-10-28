const test = require('tape');
const chain = require('../../../Maybe/operators/chain');

test('maps and flattens the result of the mapping function into a Just(value) if the input is a Just(v)', (t) => {
  const Just1 = () => 1;

  t.equals(3, chain(x => function Just() {
    return x + 2;
  })(Just1)());
  t.end();
});

test('returns a Nothing() if the input value is a Nothing()', (t) => {
  const Nothing = () => null;

  t.equals(undefined, chain(x => function Just() {
      return x + 2;
  })(Nothing)());
  t.end();
});
