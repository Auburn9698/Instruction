// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);

// Create an array of music provider labels
var labels = Object.keys(data.us);

// Display the default plot (// Initializes the page with a default plot)
function init() {
  var data = [{
    values: us,
    labels: labels,
    type: "pie"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()


// Function called by DOM changes


 // Assign the value of the dropdown menu option to a variable

  // Initialize an empty array for the country's data











  // Call function to update the chart



// Update the restyled plot's values





