const test = require('tape');
const pipeK = require('../../Helpers/pipe-k');

test('applies the pipe Kleisli on the given functions that return a Maybe(a), then returns a Maybe(b)', (t) => {
  const Just = x => () => x;
  const Nothing = () => () => null;
  const spock = { name: { first: 'Spock' } };

  const getFirstName = pipeK(
    person => Just(person.name),
    name => Just(name.first),
    firstName => Just(firstName.toUpperCase()),
  );

  const getNothing = pipeK(
    () => Nothing(),
    name => Just(name.first),
    firstName => Just(firstName.toUpperCase()),
  );

  const MaybeFirstName1 = getFirstName(spock);
  const MaybeFirstName2 = getNothing(spock);

  t.equals('SPOCK', MaybeFirstName1());
  t.equals(undefined, MaybeFirstName2());
  t.end();
});
