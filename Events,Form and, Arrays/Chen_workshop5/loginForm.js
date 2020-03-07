 (function(){
  var form = document.getElementById('myForm');       // Get form element
  var login = document.getElementById('login');
  
  login.addEventListener('submit', function(e) {             // When user submits form
           e.preventDefault();                              // Stop it being sent
           var elements = this.elements;                    // Get all form elements
           var username = elements.username.value;          // Select username entered
           var msg      = 'Welcome ' + username;            // Create welcome message
           document.getElementById('main').textContent = msg; // Write welcome message
           });
  
  }());


// FUNCTION FOR CHECKBOX

(function(){
 var pwd = document.getElementById('pwd');
 var showPwd = document.getElementById('showPwd');
 
 showPwd.addEventListener('change', function(e) {  
     	let target= e.target || e.srcElement;//When user clicks on checkbox
		console.log(" pwd = " + pwd); // Get that element
 try {                           // Try the following code block
        // exercise for the student:
		// supply the try ... catch block that will display the password if
		// the checkbox is checked.
       if(target.checked){
          pwd.type='text'; 
       }else{
           pwd.type='password';
       }
    } catch(error) {                            // If this causes an error
        alert('This browser cannot switch type'); // Say that cannot switch type
    }
 
 });
 }());