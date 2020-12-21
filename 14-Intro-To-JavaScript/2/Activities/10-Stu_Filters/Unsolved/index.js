// @TODO: Uncomment the following file and complete the code
//        according to the instructions in README.md.

//Roster of player
var roster = [{
  name: "Doug",
  position: "Quarterback",
  madeTeam: true
},
{
  name: "Antonio",
  position: "Tight End",
  madeTeam: true
},
{
  name: "Nick",
  position: "Kicker",
  madeTeam: false
},
{
  name: "Ereck",
  position: "Offensive Live",
  madeTeam: false
},
{
  name: "AJ",
  position: "Line Backer",
  madeTeam: true
}];

// YOUR CODE HERE
// Create a custom function to return players who made the team
function madeCut(player) {
    return player.madeTeam == true;
}

// Call the custom function with filter()
var team = roster.filter(madeCut);

// Display the results
console.log(team);

// Determine how many players made the cut, and how many did not
var numPlayersOnTeam = team.length;
var numCutPlayers = roster.length - team.length;

// Display the results
console.log(`The number of players on the team is ${numPlayersOnTeam}`);
console.log(`The number of cut players is ${numCutPlayers}`);

