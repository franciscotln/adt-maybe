const test = require('tape');
const safeChain = require('../../../Maybe/operators/safe-chain');

test('calls the mapping function inside a try/catch. Returns Nothing() if the result throws an error is nil', (t) => {
  const JustPerson = () => ({ person: { name: 'Spock' }});
  const JustSpock = () => 'Spock';
  const JustObj = () => ({});
  const Nothing = () => {};
  const mappingFn = obj => function Just() {
      return obj.person.name;
  };

  t.equals(JustSpock(), safeChain(mappingFn)(JustPerson)());

  t.equals(Nothing(), safeChain(mappingFn)(JustObj)());

  t.equals(Nothing(), safeChain(mappingFn)(Nothing)());

  t.end();
});
