console.log(data);
// Trace1 for the Greek Data
var trace1 = {
    x: data.map(row => row.pair),
    y: data.map(row => row.greekSearchResults),
    text: data.map(row => row.greekName),
    name: "Greek god",
    type: "bar"
  };

  var trace2 = {
      x: data.map(row => row.pair),
      y: data.map(row => row.romanSearchResults),
      text: data.map(row => row.romanName),
      name: "Roman god",
      type: "bar"
  };

  var chart_data = [trace1, trace2];

  var config = {responsive: true}
  
// Apply the group barmode to the layout
var layout = {
    title: "Greek gods vs Roman gods",
    barmode: "stack"
//  barmode: "group"    
};

// (In class, Tom changed "group" to "stack" and it made a stacked bar chart.)

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", chart_data, layout, config);