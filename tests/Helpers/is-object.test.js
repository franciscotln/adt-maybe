const test = require('tape');
const isObject = require('../../Helpers/is-object');

test('returns true if the input is an object literal', (t) => {
  const allObjects = [{}, new Object(), Object.create(null)].every(isObject);
  t.true(allObjects);
  t.end();
});

test('returns false if input is not an object literal', (t) => {
  function FakeConstructor() {
    this.name = 'A';
  }
  const inputs = [null, undefined, '0', Infinity, NaN, new FakeConstructor()];
  const noneIsNumber = inputs.every(input => !isObject(input));
  t.true(noneIsNumber);
  t.end();
});
