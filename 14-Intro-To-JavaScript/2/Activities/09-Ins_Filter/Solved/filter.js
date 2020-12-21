// filter()
// An array of objects, representing a cartoon family
var simpsons = [{
  name: "Homer",
  age: 45
}, {
  name: "Lisa",
  age: 8
}, {
  name: "Marge",
  age: 43
}, {
  name: "Bart",
  age: 10
}, {
  name: "Maggie",
  age: 1
}];

// Create a custom filtering function
function selectYounger(person) {
  return person.age < 30;
}

// filter() uses the custom function as its argument
var youngSimpsons = simpsons.filter(selectYounger);


//How to do the above with an arrow function:
var youngnames = simpsons.filter(simpson => simpson.age <30);
youngnames;



//Added in class:
function selectDelinquents(person) {
  return person.name == "Bart" ;
}

var delinquentSimpsons = simpsons.filter(selectDelinquents);



// Test
console.log(youngSimpsons);
console.log(delinquentSimpsons);
console.log(youngnames);
