const test = require('tape');
const prop = require('../../Helpers/prop');

test('returns the given property of an object', (t) => {
  t.equals('Spock', prop('name')({ id: 1, name: 'Spock' }));
  t.equals(undefined, prop('name')({}));
  t.equals(undefined, prop('name')(null));
  t.equals(undefined, prop('name')(undefined));
  t.end();
});
