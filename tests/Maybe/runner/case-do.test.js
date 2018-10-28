const test = require('tape');
const caseDo = require('../../../Maybe/runner/case-do');

test('calls the Just matcher is a Just(value) is passed, calls Nothing matcher otherwise', (t) => {
  const Just2 = () => 2;
  const Nothing = () => null;

  caseDo({
    Just(v) {
      t.equals(2, v);
    },
    Nothing() {
      // not called
      t.true(false);
    }
  })(Just2);

  caseDo({
    Just() {
      // not called
      t.true(false);
    },
    Nothing(v) {
      t.equals(undefined, v);
    }
  })(Nothing);

  t.end();
});

test('throws an error if any of the matchers is missing', (t) => {
  const Just2 = () => 2;
  const Nothing = () => null;

  t.throws(() => {
    // missing Nothing() case.
    caseDo({
      Just(v) {
        t.equals(2, v);
      }
    })(Just2);
  });

  t.throws(() => {
    // missing Just(v) case.
    caseDo({
      Nothing() {
        t.true(true);
      }
    })(Nothing);
  });

  t.end();
});
