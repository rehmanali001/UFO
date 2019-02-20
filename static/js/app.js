// Variables
var date = d3.select("#datetime");
var city = d3.select("#city");
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var ufo_sightings = (dataInput) => {

  dataInput.forEach(ufo => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufo[column]))
  });
}

//Populate table
ufo_sightings(data);

