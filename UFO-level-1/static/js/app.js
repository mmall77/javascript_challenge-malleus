// from data.js
let tableData = data;
//from day 3 activity 3
var tbody = d3.select('tbody');


let filtered = 0
//for each object in the data.js array append each object to a row in an html table and add the values from data.js to tds in the html
//define function to build table
function ufoTable(ufoData) {
  // empty contents if any
  tbody.html('')
  // loop through
  ufoData.forEach((ufoSighting) => {
    //append rows day3 activity 2
    let newRow = tbody.append("tr");
    //iterate through data.js values
    Object.entries(ufoSighting).forEach(([, value]) => {
      //append new cells for the values day3 activity 3
      let newCell = newRow.append("td");
      newCell.text(value);
    });
  });
};

// button click handler to listen to events and filter data when user inputs a date
function userClicked() {
  // selects elements
  let inputValue = d3.select("#datetime").property("value")
  let filtered = tableData
  // checks input and filters
  if (inputValue) {
    filtered = filtered.filter(newRow => newRow.datetime === inputValue)
  };
    // filtered table data
    ufoTable(filtered)
};
// event handler
d3.selectAll("#filter-btn").on("click", userClicked)
// Render table
ufoTable(tableData);


// data.forEach(function(ufoSightings){
//   // console.log(ufoSightings);
//   var row = tbody.append("tr");
//   Object.entries(ufoSightings).forEach(([, value]) => {
//     // console.log(value)
//     let newCell = row.append("td");
//     newCell.text(value);

//     })
    
// })
