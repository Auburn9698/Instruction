// Case statement
function chooseFriend(friend) {
  switch(friend) {
    // this is like 'if friend == 'Mickey'
    case "Mickey":  
      console.log("I am a very famous mouse!");
      break;
    // this is like 'else if friend == 'Donald'
    case "Donald":
      console.log("I am a very famous duck!");
      break;
    // this is like 'else if friend == 'Goofy'
    case "Goofy":
      console.log("I am a very famous dog!");
      break;
    // this is like else:
    default:
      console.log("Did you forget to choose a friend?");
  }
}

chooseFriend("Mickey");
