'use strict'
var Shop = function(shopName, avgNum, minCust, maxCust, hoursOpen) {
  this.shopName = shopName;
  this.avgNum = avgNum;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.hoursOpen = hoursOpen;
  this.hourly = [];
  this.totalPerDay = 0
  this.randCust = function (){
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

Shop.prototype.render = function() {
  this.donutsPerDay();
  var addRow = document.createElement("tr");
  var rowData = "<td><strong>" + this.shopName + "</strong></td>";
  for (var j=0; j < this.hourly.length; j++) {
    rowData = rowData + "<td>" + this.hourly[j] + "</td>";
    console.log(rowData);
  }
  addRow.innerHTML = rowData + "<td>" + this.totalPerDay + "</td>";
  tableSet.appendChild(addRow);
};

//Runs loop to calculate number donuts per day based on the random donutsPerHour. Includes total Per Day in Math.random.
Shop.prototype.donutsPerDay = function() {
  for (var i = 0; i < this.hoursOpen; i++) {
    this.totalPerDay += Math.floor(this.randCust() * this.avgNum);
    this.hourly.push(Math.floor(this.randCust() * this.avgNum));
  }
};

var tableSet = document.getElementById("tblBody");
var addRow = document.createElement("tr");

var header = (function() {
  var newRow = document.createElement("tr");
  var hdData = "<td><strong>" + "Locations" + "</strong></td>";
  for (var h=0; h < 11; h++) {
    var time = 700 + (h * 100);
    hdData += "<td><strong>" + time + " Hours</strong></td>";
  }
  hdData += "<td><strong>" + "Totals" + "</strong></td>";
  tableSet.appendChild(newRow);
  newRow.innerHTML = hdData;
})();

var downtown = new Shop("Downtown", 4.50, 8, 43, 11);
var capHill = new Shop("Capitol Hill", 2, 4, 37, 11);
var southLake = new Shop("South Lake Union", 6.33, 9, 23, 11);
var wedgewood = new Shop("Wedgewood", 1.25, 2, 28, 11);
var ballard = new Shop("Ballard", 3.75, 8, 58, 11);

//Call it.
downtown.render();
capHill.render();
southLake.render();
wedgewood.render();
ballard.render();

