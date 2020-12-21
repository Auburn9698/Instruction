var userInfo = {
  name: "Eric",
  age: 32,
  location: "North America"
};

// Use `Object.values` and `forEach` to iterate through keys
Object.keys(userInfo).forEach(key => console.log(key));

// Use `Object.keys` and `forEach` to iterate through keys
Object.values(userInfo).forEach(value => console.log(value));

// Use `Object.entries` and `forEach` to iterate through keys and values
Object.entries(userInfo).forEach(([key, value]) => console.log(`Key: ${key} and Value ${value}`));


// Array of objects
var users = [
  { name: "Eric", age: 32, location: "North America" },
  { name: "Sally", age: 23, location: "Europe", do_not_track:true },
  { name: "Sam", age: 32, location: "Europe", do_not_track:true},
  { name: "Cassandra", age: 27, location: "North America" }];



users.forEach((user) => {console.log(user)});

  
// Loop through array of objects then each object
users.forEach((user) => {
  console.log(user);

  // Get the entries for each object in the array
  Object.entries(user).forEach(([key, value]) => {
    // Log the key and value
    console.log(`Key: ${key} and Value ${value}`);
  });
});

//Added in class:
users.forEach((user) => {
  console.log(user);

  Object.entries(user).forEach(([key, value]) =>{
    if("do_not_track" in user)
    {console.log("Do not track this user");}
    else{console.log(`Key: ${key} and value ${value}`);};


  });


});