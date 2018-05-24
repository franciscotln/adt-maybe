# adt-maybe

Function based Maybe algebraic data type for safe code

`npm install adt-maybe`

## Examples

### Applicative
```js
const { safeFunc, safeNum } = require('adt-maybe/Maybe/safe');
const ap = require('adt-maybe/Maybe/operators/ap');
const option = require('adt-maybe/Maybe/operators/option');
const pipe = require('adt-maybe/Helpers/pipe');

// mAdd2 :: Maybe (Number -> Number -> Number)
const mAdd2 = safeFunc(a => b => a + b);

// All data provided are numbers
pipe(
  ap(safeNum(4)),
  ap(safeNum(3)),
  option(0)
)(mAdd2); // => 7

// One piece of data is a string "4"
pipe(
  ap(safeNum("4")),
  ap(safeNum(3)),
  option(0)
)(mAdd2); // => 0
```

### With safe objects
```js
const option = require('adt-maybe/Maybe/operators/option');
const safeMap = require('adt-maybe/Maybe/operators/safe-map');
const safeObj = require('adt-maybe/Maybe/safe/safe-obj');
const { pipe, propPath, toLower } = require('adt-maybe/Helpers');

// safeJonSnow :: Maybe Person
const safeJonSnow = safeObj({
  id: 1,
  name: {
    first: 'Jon',
    last: 'Snow'
  },
  knows: []
});

// safeJon :: Maybe Person
const safeNoOne = safeObj({
  id: 2,
  knows: []
});

// getLastNameLower :: Person -> String
const getLastNameLower = pipe(
  propPath('name.last'),
  toLower
);

// getLastName :: Maybe Person -> String
const getLastName = pipe(
  safeMap(getLastNameLower),
  option('bastard')
);

getLastName(safeJonSnow); // => snow
getLastName(safeNoOne); // => bastard
```
