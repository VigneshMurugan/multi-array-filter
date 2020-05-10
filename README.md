# multi-array-filter
Filter an Array using multiple predicates


it takes 2 mandatory arguments and 1 optional argument. First parameter is the input array.
Second argument is array of predicates which needs to validated against the array.
Third argument is optional boolean which indicates whether an item should pass all predicates or atleast one predicate. true validates that all predicates are satisfied and false validates atleast one predicate is satisfied

```javascript
import filterArray from 'multi-filter-array'

const addressListArray = [{
    name: 'TestUser1',
    email: 'TestUser1@mail.com',
    age: 25,
    address: 'TestCountry1'
  },
  {
    name: 'TestUser2',
    email: 'TestUser2@mail.com',
    age: 35,
    address: 'TestCountry2'
  },
  {
    name: 'TestUser3',
    email: 'TestUser3@mail.com',
    age: 28,
    address: 'TestCountry1'
  }
];

filterArray(addressListArray, [person => person.address == 'TestCountry1', person => person.name == 'TestUser3'])

```