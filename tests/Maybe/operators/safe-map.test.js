const test = require('tape');
const safeMap = require('../../../Maybe/operators/safe-map');

test('calls the mapping function inside a try/catch. Returns Nothing() if the result throws an error is nil', (t) => {
    const JustPerson = () => ({ person: { name: 'Spock' }});
    const JustSpock = () => 'Spock';
    const JustObj = () => ({});
    const Nothing = () => {};
    const mappingFn = obj => obj.person.name;

    t.equals(JustSpock(), safeMap(mappingFn)(JustPerson)());

    t.equals(Nothing(), safeMap(mappingFn)(JustObj)());

    t.equals(Nothing(), safeMap(mappingFn)(Nothing)());

    t.end();
});
