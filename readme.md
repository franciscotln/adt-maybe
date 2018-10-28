# adt-maybe

Function based Maybe algebraic data type for safe code

`npm install adt-maybe`

## Examples

### Applicative
```js
const { safeFunc, safeNum } = require('adt-maybe/Maybe/safe');
const ap = require('adt-maybe/Maybe/operators/ap');
const caseDo = require('adt-maybe/Maybe/runner/case-do');
const pipe = require('adt-maybe/Helpers/pipe');

// mAdd2 :: Maybe (Number -> Number -> Number)
const mAdd2 = safeFunc(a => b => a + b);

// All data provided are numbers
pipe(
  ap(safeNum(4)),
  ap(safeNum(3)),
  caseDo({
    Just: x => x,
    Nothing: () => 0
  })
)(mAdd2); // => 7

// One piece of data is a string "4"
pipe(
  ap(safeNum("4")),
  ap(safeNum(3)),
  caseDo({
    Just: x => x,
    Nothing: () => 0
  })
)(mAdd2); // => 0
```

### With safe objects
```js
const caseDo = require('adt-maybe/Maybe/runner/case-do');
const safeMap = require('adt-maybe/Maybe/operators/safe-map');
const safeObj = require('adt-maybe/Maybe/safe/safe-obj');
const { pipe } = require('adt-maybe/Helpers');

// safeJonSnow :: Maybe Person
const safeJonSnow = safeObj({
  id: 1,
  name: {
    first: 'Jon',
    last: 'Snow'
  },
  knows: ['nothing']
});

// safeNobody :: Maybe Person
const safeNoOne = safeObj({
  id: 2,
  knows: ['Javascript']
});

// getLastNameLower :: Person -> String
const getLastNameLower = pipe(
  person => person.name.last,
  lastName => lastName.toLowerCase()
);

// getLastName :: Maybe Person -> String
const getLastName = pipe(
  safeMap(getLastNameLower),
  caseDo({
    Just: lastName => lastName,
    Nothing: () => 'no one'
  })
);

getLastName(safeJonSnow); // => 'snow'
getLastName(safeNoOne); // => 'no one'
```

### Using pipe Kleisli
```js
const { safeObj, safeStr } = require('adt-maybe/Maybe/safe');
const pipeK = require('adt-maybe/Helpers/pipe-k');
const parseJSON = require('adt-maybe/Maybe/factory/parse-json');
const caseDo = require('adt-maybe/Maybe/runner/case-do');

// maybeFirstName :: Maybe String
const maybeFirstName = pipeK(
  parseJSON,
  person => safeObj(person.name),
  name => safeStr(name.first)
)("{\"name\":{\"first\":\"Spock\"}}");

const cases = {
  Just(firstName) {
    return firstName.toUpperCase();
  },
  Nothing() {
  
  }
};

caseDo(cases)(getLastName); // => 'SPOCK'
```