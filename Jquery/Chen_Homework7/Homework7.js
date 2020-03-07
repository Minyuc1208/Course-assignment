$(function() {

  // SETUP
  var $list, $newItemForm, $newItemButton;
  var item = '';                                 // item is an empty string
  $list = $('ul');                               // Cache the unordered list
    console.log($list);
  $newItemForm = $('#newItemForm');              // Cache form to add new items
  $newItemButton = $('#newItemButton');          // Cache button to show form

  $('li').hide().each(function(index) {          // Hide list items
    $(this).delay(450).fadeIn(1600);     // Then fade them in/ task1
  });

  // ITEM COUNTER
  function updateCount() {                       // Create function to update counter
  
  
  // WRITE YOUR LOGIC HERE
        var items = $('li[class!=complete]').length;
		$('#counter').text(items);
		console.log("We currently have " + items+ " items");
  
  
  }
  updateCount();                                 // Call the function

  // SETUP FORM FOR NEW ITEMS
  $newItemButton.show();                         // Show the button
  $newItemForm.hide();                           // Hide the form
  $('#showForm').on('click', function() {        // When click on add item button
    $newItemButton.hide();                       // Hide the button
    $newItemForm.show();                         // Show the form
  });

  // ADDING A NEW LIST ITEM
  $newItemForm.on('submit', function(e) {       // When a new item is submitted    
        // Prevent form being submitted
        // Get value of text input
        // Add item to end of the list
        // Empty the text input
        // Update the count
      //task 5
  e.preventDefault();   
    let text = $('input:text').val();   
    var placeHolder = document.getElementById("itemDescription");
    if (text.length>0){
      $list.append('<li>' + text + '</li>');
      $('input:text').val('');
      placeHolder.placeholder = 'Add description';
      updateCount();
    } else{
      placeHolder.placeholder = 'Seriously, add a description.';
    }
      
                  
  });

  // CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT
  $list.on('click', 'li', function() {
    var $this = $(this);               // Cache the element in a jQuery object
    var complete = $this.hasClass('complete');  // Is item complete
      

    if (complete === true) {           // Check if item is complete       
        // If so, animate opacity + padding
        // Use callback when animation completes
        // Then completely remove this item
        //task 4
        $this.animate({
            opacity:0.0,
            paddingLeft:'+=180'
        },500,'swing',function(){
            $this.remove();
        })
   
    } else {                           // Otherwise indicate it is complete
      item = $this.text();             // Get the text from the list item
      $this.remove();                  // Remove the list item
      $list                            // Add back to end of list as complete
//        .append('<li class=\"complete\">' + item + '</li>') //task2
       .append('<li class=\"complete\" style="background-color:grey">' + item + '</li>')
        .hide().fadeIn(300);           // Hide it so it can be faded in/ task3
      updateCount();                   // Update the counter
    }                                  // End of else option
  });                                  // End of event handler

});