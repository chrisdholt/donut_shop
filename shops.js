//Top Pot Domain Model

var Shop = function(shopName, avgNum, minCust, maxCust, hoursOpen) {
  this.shopName = shopName;
  this.avgNum = avgNum;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.hoursOpen = hoursOpen;
  this.hourly = [];
  this.averageCustomers = function (){
  return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};

//calculate number donuts per hour
Shop.prototype.donutsPerHour = function() {
  return Math.floor(this.averageCustomers() * this.avgNum);
};

//calculate number donuts per day (number of hours is fixed!)
Shop.prototype.donutsPerDay = function() {
  var totalPerDay = 0;

  for (var i = 0; i < this.hoursOpen; i++) {
    totalPerDay += this.donutsPerHour();
    this.hourly.push(this.donutsPerHour());
  }
  return totalPerDay;
};

Shop.prototype.render = function() {
  this.donutsPerDay();
  var addRow = document.createElement("tr");
  var tableSet = document.getElementById("table");
  var rowData = "<td><strong>" + this.shopName + "</strong></td>";

  for (var j=0; j < this.hourly.length; j++) {
    rowData = rowData + "<td>" + this.hourly[j] + "</td>";
    console.log(rowData);
  }
  addRow.innerHTML = rowData + "<td>" + this.donutsPerDay() + "</td>";
  tableSet.appendChild(addRow);
};

var downtown = new Shop("Downtown", 4.50, 8, 43, 11);
var capHill = new Shop("Capitol Hill", 2, 4, 37, 11);
var southLake = new Shop("South Lake Union", 6.33, 9, 23, 11);
var wedgewood = new Shop("Wedgewood", 1.25, 2, 28, 11);
var ballard = new Shop("Ballard", 3.75, 8, 58, 11);


downtown.render();
capHill.render();
southLake.render();
wedgewood.render();
ballard.render();



