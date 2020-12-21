// @TODO: YOUR CODE HERE
var trace1 = {
    y: temps.newyork,
    type: "box",
    name: "New York",
    boxpoints: "all"
}

var trace2 = {
    y: temps.houston,
    type: "box",
    name: "Houston",
    boxpoints: "all"
}
var data = [trace1, trace2];

// Use `layout` to define a title
var layout = {
  title: "Temps Box Plot",
  yaxis: {title: "Degrees (F)"}
};
var config = {responsive: true}

// Render the plot to the `plot1` div
Plotly.newPlot("plot", data, layout, config);