'use strict'
// global variables
var customers = new Array();
var dvTable = document.getElementById('dvTable');
var theTable = dvTable.appendChild(document.createElement('table'));
var i,j,k,tableRow,tableColumn;

function generateTable() {
	createTheData();
	buildTheTable();
	addDataToTable();
	
}

function createTheData() {	
	 //Build an array containing Customer records.       
     customers.push(["Customer Id", "Name", "Country"]);
     customers.push([1, "John Hammond", "United States"]);
     customers.push([2, "Mudassar Khan", "India"]);
     customers.push([3, "Suzanne Mathews", "France"]);
     customers.push([4, "Robert Schidner", "Russia"]);
}

function buildTheTable () {
	// for you to fill in
	// use createElement to create the table
   var headerRow = theTable.appendChild(document.createElement('th'));
	// use nested loops to generate the table 
    for(i=0; i< customers.length; i++){
        
        var rowText= customers[i];//Get an array 
        
      
            for ( k=0; k< rowText.length; k++){ // Set the 3 cells and fill in text;
        
         tableColumn =document.createElement('td');   
           tableColumn.appendChild(document.createTextNode(rowText[k]));
           
           var tdList = document.getElementsByTagName('td');
            console.log('k value is '+ k + ' and node list has ' +tdList.length);  
                         if(i==0){
           headerRow.appendChild(tableColumn); 
          } else { 
                tableRow.appendChild(tableColumn);
              
         }
       
           }
        
            for ( j=0;j< 1 ; j++){

             tableRow = theTable.appendChild(document.createElement('tr')); 
              
                
        }     
     
       console.log(tableColumn);
    }
   
	// outer loop for the column count and inner loop for the row count
	// DO NOT LOOK AT THE DATA AND COUNT, you must use the length property to get credit!
	// you may create the header row separately.
}

function addDataToTable() {
	// add a couple more rows and make sure it makes it to the table.
    var moreRows= theTable.appendChild(document.createElement('tr'));
    var moreColumn= moreRows.appendChild(document.createElement('td'));
    moreColumn.appendChild(document.createTextNode('Thank you'));
}

