const test = require('tape');
const isFunction = require('../../Helpers/is-function');

test('returns true if the input is a function', (t) => {
  const inputs = [() => {}, new Function()];
  const allFunctions = inputs.every(isFunction);
  t.true(allFunctions);
  t.end();
});

test('returns false if the input is not a function', (t) => {
  const inputs = [null, undefined, '', {}, [''], 1, true, NaN];
  const noneIsFunction = inputs.every(input => !isFunction(input));
  t.true(noneIsFunction);
  t.end();
});
