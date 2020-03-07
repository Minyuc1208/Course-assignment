 (function(){
  var form, options, other, otherText, hide;           // Declare variables
  form      = document.getElementById('myForm');    // Get the form
  options   = form.elements.heard;                     // Get the radio buttons
  other     = document.getElementById('other');        // Other radio button
  otherText = document.getElementById('other-text');   // Other text input
  otherText.className = 'hide';                        // Hide other text input
  
  for (var i = [0]; i < options.length; i++) {         // Loop through radios
  options[i] .addEventListener('click', radioChanged);       // Add event listener
  }
  
  var e = document.getElementById("other-text");
  e.addEventListener('change',showValue);           //adding event Listener to the dropdown
  
  function showValue() {
  var strUser = e.options[e.selectedIndex].value;
  console.log(strUser);                             //any change in the selection would be displayed in console.log
  }

  
  function radioChanged() {
  
      console.log(options.value);
  hide = other.checked ? '' : 'hide';                // Is other checked?
  otherText.className = hide;                        // Text input visibility
  if (hide) {                                        // If text input hidden
  otherText.value = '';                            // Empty its contents
  }
  }
  }());

