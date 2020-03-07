var gradebookData = [];
var assignmentData = [];

class Student {
	constructor (firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.id = gradebookData.length;
		this.grades = [];
		// AT THE END OF STEP 15, ADD A LINE TO CALL addStudentRow HERE
        this.studentRow = addStudentRow(this.id, this.firstName, this.lastName);

	}
} // end class Student

class Assignment {
	constructor (assignmentName, totalPointValue) {
		this.assignmentName = assignmentName;
		this.totalPointValue = totalPointValue;
		this.id = assignmentData.length;
		// STEP 11 GOES HERE
        this.gradeColumn = addGradeColumn(assignmentName, totalPointValue);
	} 
    
}

function createNewAssignment(assignmentName, totalPointValue) {
    // create a new assignment object to add to the assignment array...
    var assignment = new Assignment(assignmentName, totalPointValue);
    var i;
    assignmentData.push(assignment);
    /*  ... then update the gradebook so every student i has a 0 score in
        that assignment spot. (Note that students just have a number for each  
        assignment position; the assignment names are handled in the separate
        assignmentData array)
    */
    for (var i = 0; i < gradebookData.length; i = i + 1) {
        gradebookData[i].grades[assignment.id] = 0;
    }
}

function createNewStudent(firstName, lastName) {
    // create a new student object to add to the gradebook array...
    var student = new Student(firstName, lastName);
    var i;
    gradebookData.push(student);
    // update new student so s/he has a grade of 0 for every existing 
    // assignment i from the assignment array
    for (i = 0; i < assignmentData.length; i = i + 1) {
        student.grades[i] = 0;
    }
}

function updateStudentGrade(studentID, assignmentID, points) {
    gradebookData[studentID].grades[assignmentID] = points;
}

// STEP 10: WRITE YOUR INITIAL addGradeColumn FUNCTION HERE
function addGradeColumn(assignmentName,totalPointValue,id){
    var gradeHeaderRow = document.getElementById('gradeHeaders');
    var gradeColumn = document.createElement('td');
    gradeColumn.appendChild(document.createTextNode(assignmentName+'('+totalPointValue+')'));
    gradeHeaderRow.appendChild(gradeColumn);
    
   
// STEP 17: EDIT addGradeColumn to ADD NEW COLUMNS TO ANY EXISTING STUDENTS
for(var i=0;i<gradebookData.length;i++){
    var gradeCell = gradebookData[i].studentRow.appendChild(document.createElement('td'));
    gradeCell.appendChild(document.createTextNode("0"));
    } 
    return gradeColumn;
  }
//



function addStudentRow(studentID, firstName, lastName) {
    var gradeTable = document.getElementById('gradebook');
    var studentRow = gradeTable.appendChild(document.createElement('tr'));
    
    var id = studentRow.appendChild(document.createElement('td'));
    var studentName = studentRow.appendChild(document.createElement('td'));
    var studentPercent = studentRow.appendChild(document.createElement('td'));
    
     id.appendChild(document.createTextNode(studentID));
     studentName.appendChild(document.createTextNode(firstName + " " + lastName)); studentPercent.appendChild(document.createTextNode("0"));   

    // STEPS 14-15: CREATE A LOOP TO ITERATE THROUGH THE ASSIGNMENTDATA ARRAY
 for (var j = 0; j < assignmentData.length; j = j + 1) {
        var gradeData = studentRow.appendChild(document.createElement('td'));
        gradeData.appendChild(document.createTextNode("0"));
    }
    
   
    // AND ADD A TABLE CELL CONTAINING "0" FOR EACH. PUT A RETURN VALUE
    
     return studentRow;
    // AT THE END OF THE FUNCTION.
  
}

// STEP 7: EDIT THIS FUNCTION
function promptForStudentInfo() {
    var firstName='';
    var lastName='';
    do{ 
        firstName = prompt("Please enter the student's first name")
    } 
    while(firstName.length<1);

 do{ 
        lastName = prompt("Please enter the student's last name")
    } 
    while(lastName.length<1);
    
    createNewStudent(firstName,lastName);
    
    console.log("first name is:"+firstName+" and last name is:"+lastName);
    
}// end of function promptForStudentInfo

// STEPS 6 AND 9:
// IN STEP 6, WRITE A TEST FUNCTION TO MAKE SURE THE BUTTON WORKS
function promptForAssignmentInfo() { 
    var assignmentName='';
    var assignmentValue=0;
    do{
        assignmentName = prompt("Please enter the assignment name")
    }
    while(assignmentName.length<1);

    do{
        assignmentValue = Number(prompt("Please enter the assignment value"));
    }
    while(assignmentValue<0);
    createNewAssignment(assignmentName,assignmentValue);
    
    console.log("assignment name is: "+assignmentName+" and aasignment value is: "+ assignmentValue);
   
}// end of function promptForAssignmentInfo

// IN STEP 9, EDIT THE FUNCTION TO WORK AS DESCRIBED




// STEPS 4-6: ADD YOUR CODE TO WIRE THE BUTTON OBJECTS TO THE FUNCTIONS
var student= document.getElementById('addStuent');
addStudent.addEventListener('click',promptForStudentInfo);/*1st js listen when user'click'-the event named by us-,2nd is what to do, only the function name.*/

// HERE. FOR STEP 6, BE SURE TO ALSO ADD YOUR TEST FUNCTION ABOVE!

var assignment= document.getElementById('addAssignment');
addAssignment.addEventListener('click',promptForAssignmentInfo);

// THIS TEST DATA STILL WORKS AT THE WORKSHOP END SINCE WE CALL THE ROUTINES
// NECESSARY TO UPDATE THE INTERFACE WHENEVR WE CREATE SOMETHING NEW

createNewStudent("Adam","Anders");
createNewAssignment("Homework#1", 10);
createNewStudent("Beth","Booker");
createNewAssignment("Homework#2", 20);

// THE TEST DATA BELOW DOES NOT WORK AS OF THE END OF THE WORKSHOP BECAUSE
// WE HAVE NOT YET WRITTEN A ROUTINE TO VISUALLY UPDATE EXISTING TABLE ROWS
// In addition, because I have removed the routine that I wrote for last week 
// to draw the gradebook, which also calculated the student grade percentages,
// that data just doesn't exist in this version (since we don't store a student's
// overall class score in Student objects right now.

updateStudentGrade(0, 0, 5);
updateStudentGrade(1, 1, 10);
