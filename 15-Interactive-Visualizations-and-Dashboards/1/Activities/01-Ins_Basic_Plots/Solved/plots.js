// // Part 1
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//     "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "bar"
// };

// var data = [trace1];
// var config = {responsive: true}
// var layout = {
//   title: "'Bar' Chart"
// };

// Plotly.newPlot("plot", data, layout, config);


// Part 2 - Adding attributes
var trace1 = {
  x: ["beer", "wine", "martini", "margarita",
      "ice tea", "rum & coke", "mai tai", "gin & tonic"],
  y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
  type: "bar"
};

var data = [trace1];

var layout = {
  title: "'Bar' Chart",
  xaxis: { title: "Drinks"},
  yaxis: { title: "% of Drinks Ordered"}
};
var config = {responsive: true}

Plotly.newPlot("plot", data, layout, config);


// // Part 3 - Line Chart
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "line"
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart",
// };
// var config = {responsive: true}

// Plotly.newPlot("plot", data, layout, config);

// // Part 4 - Broken Pie Chart
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "pie"
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart",
// };
// var config = {responsive: true}

// Plotly.newPlot("plot", data, layout, config);


// Part 5 - Working Pie Chart
// var trace1 = {
//   labels: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: 'pie'
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart",
// };
// var config = {responsive: true}

// Plotly.newPlot("plot", data, layout, config);

