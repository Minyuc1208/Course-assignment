'use strict'

var authors = ['Ernest Hemingway', 'Charlotte Bronte', 'Louisa May Alcott', 'Charles Dickens'];

var titles = ['The Old Man and the Sea', 'Jane Eyre', 'Little Women', 'Oliver Twist'];
 
var theTable = document.getElementById('myAuthors');
// write this function to take 2 strings, an author and a title and add them to the BEGINNING of the respective arrays.
function addToArrays(myAuthor, myTitle) {
    authors.unshift(myAuthor);
    titles.unshift(myTitle)
    
	
}

// now call the function with your author and title -- you can make up names!
addToArrays('Minyu Chen','Curious');
for (var i=0; i< authors.length; i++){
    console.log('Author name is '+authors[i]+' and the title is '+ titles[i]);
    
}

// write the function to create the table and add the authors and their titles
function outputTable(authors, titles) {
    for(var i=0; i<authors.length;i++){
        var theHeader = theTable.appendChild(document.createElement('tr'));
        var authorsName = theHeader.appendChild(document.createElement('td'));
        var bookTitle = theHeader.appendChild(document.createElement('td'));
       authorsName.appendChild(document.createTextNode(authors[i]));
       bookTitle.appendChild(document.createTextNode(titles[i])); 
    }
	
}

// now invoke the function: 
outputTable(authors, titles);

// Finally add the 2 paragraphs
document.write('<p>The first author is '+ authors[0] + ' and the corresponing tilte is  ' +titles[0]+'.</p>');

document.write('<p>The first author is '+ authors[authors.length-1] + ' and the corresponing tilte is ' +titles[titles.length-1]+'.</p>');



