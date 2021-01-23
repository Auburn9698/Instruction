
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 110,  
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

/// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);


// append a SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// initial params
var chosenXAxis = "overall";
var chosenYAxis = "value_euros";   

// function used for updating x-scale var upon click on axis label
function xScale(fifaData, chosenXAxis) {
  var xLinearScale = d3.scaleLinear()
    .domain([d3.min(fifaData, d => d[chosenXAxis]) * 0.8,
    d3.max(fifaData, d => d[chosenXAxis]) * 1.2
    ])
    .range([0, width])

  return xLinearScale;
}

// function used for updating y-scale var upon click on axis label
function yScale(fifaData, chosenYAxis) {
  var yLinearScale = d3.scaleLinear()
    .domain([d3.min(fifaData, d => d[chosenYAxis]) * 0.8,
    d3.max(fifaData, d => d[chosenYAxis]) * 1.2
    ])
    .range([height, 0])

  return yLinearScale;
}

// function used for updating xAxis var upon click on axis label
function renderXAxes(newXScale, xAxis) {
  var bottomAxis = d3.axisBottom(newXScale);
  xAxis.transition()
    .duration(1000)
    .call(bottomAxis);

  return xAxis;
}

// function used for updating yAxis var upon click on axis label
function renderYAxes(newYScale, yAxis) {
  var leftAxis = d3.axisLeft(newYScale);
  yAxis.transition()
    .duration(1000)
    .call(leftAxis);

  return yAxis;
}

// function used for updating circles group with a transition to new circles in x position
function renderXCircles(circlesGroup, newXScale, chosenXAxis) {

  circlesGroup.transition()
    .duration(1000)
    .attr("cx", d => newXScale(d[chosenXAxis]));

  return circlesGroup;
}

// function used for updating circles group with a transition to new circles in y position
function renderYCircles(circlesGroup, newYScale, chosenYAxis) {

  circlesGroup.transition()
    .duration(1000)
    .attr("cy", d => newYScale(d[chosenYAxis]));

  return circlesGroup;
}

// function used for updating circles group with new tooltip
function updateToolTip(chosenXAxis, chosenYAxis, circlesGroup) {
  if (chosenXAxis === "overall") {
    var labelX = "Overall Rating: "
  }
  else if (chosenXAxis === "potential") {
    var labelX = "Potential: "
  }

  if (chosenYAxis === "value_euros") {
    var labelY = "Value(Euros): "
  }
  else if (chosenYAxis === "bmi") {
    var labelY = "Body Mass Index: "
  }

  var toolTip = d3.tip()
    .attr("class", "tooltip") 
    .offset([80, -60])  
    .html(function(d) {
      return (`${d.name}<br>${labelX} ${d[chosenXAxis]}<br>${labelY} ${d[chosenYAxis]}`)
    });

  circlesGroup.call(toolTip).on("mouseover", toolTip.show).on("mouseout", toolTip.hide)

  return circlesGroup
};

// Retrieve data from the CSV file and execute everything below
d3.csv("fifa21.csv").then(function(fifaData, err) {  
  if (err) throw err;
  console.log(fifaData)

  // Parse data and change strings to numbers:
  fifaData.forEach(function(data) {
    data.overall = +data.overall;
    data.potential = +data.potential;
    data.value = +data.value;
    data.bmi = +data.bmi;
  });

  // xLinearScale function above csv import
  var xLinearScale = xScale(fifaData, chosenXAxis);

  // yLinearScale function above csv import
  var yLinearScale = yScale(fifaData, chosenYAxis);

  // create initial axis functions
  var bottomAxis = d3.axisBottom(xLinearScale)
  var leftAxis = d3.axisLeft(yLinearScale)

  // append x axis
  var xAxis = chartGroup.append("g")
    .classed("x-axis", true)
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  // append y axis 
  var yAxis = chartGroup.append("g")
    .classed("y-axis", true)
    .call(leftAxis);

  // append initial circles
  var circlesGroup = chartGroup.selectAll("circle")
    .data(fifaData)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d[chosenXAxis]))
    .attr("cy", d => yLinearScale(d[chosenYAxis]))
    .attr("r", 10)  
    .attr("fill", "orange") 
    .attr("opacity", "0.5");

  // Create labels group for x-axis labels 
  var xLabelsGroup = chartGroup.append("g")
    .attr("transform", `translate(${width / 2}, ${height + 20})`);

  var overallLabel = xLabelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 20)
    .attr("value", "overall")
    .classed("active", true) 
    .text("Overall Rating");

  var potentialLabel = xLabelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 40)
    .attr("value", "potential")
    .classed("inactive", true)
    .text("Potential");


  // Create labels group for y-axis labels
  var yLabelsGroup = chartGroup.append("g")
    .attr("transform", `translate(${width - 840}, ${height / 2})`); 

  var valueLabel = yLabelsGroup.append("text")
    .attr("transform", "rotate(-90)") // rotate 90 degrees
    .attr("x", 0)
    .attr("y", -20)
    .attr("value", "value_euros") 
    .classed("active", true)
    .text("Value in Euros");

  var smokesLabel = yLabelsGroup.append("text")
    .attr("transform", "rotate(-90)") // rotate 90 degrees
    .attr("x", 0)
    .attr("y", -40)
    .attr("value", "bmi")
    .classed("inactive", true)
    .text("Body Mass Index");

 
  // updateToolTip function for chosenX, Y and circlesGroup 
  var circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup);

  // x axis labels event listener
  xLabelsGroup.selectAll("text")
    .on("click", function() {
      // get value of selection  
      var value = d3.select(this).attr("value");
      if (value !== chosenXAxis) {
        // replaces chosenXAxis with value
        chosenXAxis = value;
        console.log(chosenXAxis)

        // updates x scale for new data
        xLinearScale = xScale(fifaData, chosenXAxis);

        // updates x axis with transition
        xAxis = renderXAxes(xLinearScale, xAxis);

        // updates circles with new x values
        circlesGroup = renderXCircles(circlesGroup, xLinearScale, chosenXAxis);
       
        // updates tooltips with new info
        circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup)

        // changes classes to bold text with click
        if (chosenXAxis === "potential") {
          potentialLabel
            .classed("active", true)
            .classed("inactive", false);
          overallLabel
            .classed("active", false)
            .classed("inactive", true);
        }
        else if (chosenXAxis === "overall") {
          potentialLabel
            .classed("active", false)
            .classed("inactive", true);
          overallLabel
            .classed("active", true)
            .classed("inactive", false);
        }
        } 
    });

  // y axis labels event listener
  yLabelsGroup.selectAll("text")
  .on("click", function() {
    // get value of selection  
    var value = d3.select(this).attr("value");
    if (value !== chosenYAxis) {
      // replaces chosenYAxis with value
      chosenYAxis = value;
      console.log(chosenYAxis)

      // updates y scale for new data
      yLinearScale = yScale(fifaData, chosenYAxis);

      // updates y axis with transition
      yAxis = renderYAxes(yLinearScale, yAxis);

      // updates circles with new y values
      circlesGroup = renderYCircles(circlesGroup, yLinearScale, chosenYAxis);
      
      // updates tooltips with new info
      circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup);

      // changes classes to bold text with click selection
      if (chosenYAxis === "value_euros") {
        valueLabel
          .classed("active", true)
          .classed("inactive", false);
        bmiLabel
          .classed("active", false)
          .classed("inactive", true);
      }
      else if (chosenYAxis === "bmi") {
        valueLabel
          .classed("active", false)
          .classed("inactive", true);
        bmiLabel
          .classed("active", true)
          .classed("inactive", false);
      }
      } 
  });
});
