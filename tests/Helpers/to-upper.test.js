const test = require('tape');
const toUpper = require('../../Helpers/to-upper');

test('it converts a string to its lower case version', (t) => {
    t.equals(toUpper('TesT'), 'TEST');
    t.equals(toUpper('test'), 'TEST');
    t.equals(toUpper(null), '');
    t.equals(toUpper(undefined), '');
    t.end();
});
