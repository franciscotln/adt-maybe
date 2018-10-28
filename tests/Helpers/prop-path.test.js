const test = require('tape');
const propPath = require('../../Helpers/prop-path');

test('returns the given nested property of an object', (t) => {
    const Spock = 'Spock';
    const obj = { person: { name: Spock } };
    t.equals(Spock, propPath('    . person . .   .   name    ')(obj));
    t.equals(Spock, propPath('person.name')(obj));
    t.equals(Spock, propPath(['person', 'name'])(obj));
    t.equals(undefined, propPath(['person', 'name'])(undefined));
    t.equals(undefined, propPath('person.name')(null));
    t.end();
});
