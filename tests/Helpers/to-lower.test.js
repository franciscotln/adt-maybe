const test = require('tape');
const toLower = require('../../Helpers/to-lower');

test('it converts a string to its lower case version', (t) => {
  t.equals(toLower('TesT'), 'test');
  t.equals(toLower('TEST'), 'test');
  t.equals(toLower(null), '');
  t.equals(toLower(undefined), '');
  t.end();
});
