// from data.js
var tableData = data;

// YOUR CODE HERE!
var tablebody = d3.select("tbody");
function createtable(data){
    tablebody.html("")
    data.forEach(datarow => {
        var row = tablebody.append("tr")
        Object.values(datarow).forEach(value => {
            var cell = row.append("td")
            cell.text(value)
        })
    })
}
createtable(tableData)

d3.selectAll("#filter-btn").on("click",handleClick);

function handleClick(){
    var datevalue = d3.select("#datetime").property("value")
    filtereddata = tableData.filter(row => row.datetime === datevalue)
    createtable(filtereddata)
}