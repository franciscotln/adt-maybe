const test = require('tape');
const parseJSON = require('../../../Maybe/factory/parse-json');

test('after parsing a string to JSON returns a Just(value) if successful or Nothing() otherwise', (t) => {
  t.equals(undefined, parseJSON('[invalid json]')());
  t.same({ name: 'Spock' }, parseJSON("{\"name\":\"Spock\"}")());
  t.end();
});
