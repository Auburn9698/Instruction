var austinWeather = [{
  date: "2018-02-01",
  low: 51,
  high: 76
},
{
  date: "2018-02-02",
  low: 47,
  high: 59
},
{
  date: "2018-02-03",
  low: 44,
  high: 59
},
{
  date: "2018-02-04",
  low: 52,
  high: 73
},
{
  date: "2018-02-05",
  low: 47,
  high: 71
}
];
// YOUR CODE HERE

d3.select("tbody").selectAll("tr")
  .data(austinWeather)
  .enter()
  .append("tr")
  .html(function(d) {
    return `<td>${d.date}</td><td>${d.low}</td><td>${d.high}</td>`;
  });
  


// From previous exercise:
// d3.select(".img-gallery").selectAll("div")
//   .data(complexData)
//   .enter() // creates placeholder for new data / or a shelf for a new item.
//   .append("div") // appends a div to placeholder
//   .classed("col-md-4 thumbnail", true) // sets the class of the new div
//   .html(function(d) {
//     return `<img src="${d.url}">`;
//   }); // sets the html in the div to an image tag with the link