// Randomly select an episode number for Star Wars
var text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 9) + 1);

// Select the upvote and downvote buttons
var upvote = d3.select(".upvote");
var downvote = d3.select(".downvote");

// Select the counter h3 element
var counter = d3.select(".counter")

// Use D3 `.on` to attach a click handler for the upvote
upvote.on("click", function() {
  var currentCount = parseInt(counter.text());
//   // Upvotes should increment the counter
  currentCount += 1;
//   // Set the counter h3 text to the new count
  counter.text(currentCount);
});



// // Use d3 `.on` to attach a click handler for the downvote
downvote.on("click", function() {
  var currentCount = parseInt(counter.text());
  currentCount -= 1;
  counter.text(currentCount);
});




//   // Downvotes should decrement the counter


//   // Set the counter h3 text to the new count

