(function(){
  var form, options, other, otherText, hide;           // Declare variables
  // create a select box in JS from an array
  var array = ['Friend', 'Email', 'Career Fair', 'Referal']; 
  
  form      = document.getElementById('myForm');    // Get the form
  
  // get the radio buttons next
  options = form.elements.heard;
  other = document.getElementById('other');
  otherText = document.getElementById('addSelect'); // if other was selected, get the text
  
  // hide the select boxes
  otherText.className = 'hide'; 
  
  // now in a loop add an event listener to each of the options - do not use the text book utilities
  for (var i=[0]; i < options.length; i++) {
		options[i].addEventListener('click', radioChanged);
	}
  
  // create the select box
  	for (var j = 0; j < array.length; j++) {
		console.log(array[j]);
	};
    
    var selectList = document.createElement('select');
	selectList.setAttribute("id", "mySelect");
	otherText.appendChild(selectList);
	
	for (var i = 0; i < array.length; i++) {
		var option = document.createElement("option");
		option.setAttribute('value', array[i]);
		option.text = array[i];
		selectList.appendChild(option);
	}
	
	mySelect.addEventListener('change', reportResult);
	
	function reportResult() {
		var optionResult = mySelect.value;
		console.log("You selected " + optionResult);
	}
  
  // write a function to check and see if the radio button selection has changed
  // if other is selected, display the select box; otherwise hide the select box
  function radioChanged() {
      optionSelection = options.value;
		console.log(optionSelection);
		hide= other.checked ? '' : 'hide';
		otherText.className = hide;
		
		if (hide) {
			otherText.value = '';
		}
	  
	  
  }
    
    
    var submitButton = document.getElementById("submit");
	submitButton.addEventListener("click", displayGreeting);
    
    
	function displayGreeting(e) {
		e.preventDefault();
		var welcomeMessage = document.getElementById("welcomemessage");		
		var radioDiv = document.getElementById("main");
		radioDiv.className = "hide";
		welcomeMessage.className = "";
		        
        if(options.value=='other'){
           welcomeMessage.textContent = "Thank you for letting us know your other choice: " + mySelect.value; 
        }
		else{welcomeMessage.textContent = "Thank you for choosing: " + optionSelection;
		}
	}
}());