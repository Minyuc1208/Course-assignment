$(function() {
	var DELAY = 700, clicks = 0, timer = null;
	
	$("a").on("click", function(e){	
		// your code goes here
        clearTimeout(timer);
        timeout = setTimeout(function(){
            alert('Single click');
        },DELAY);	
	 })
    
	.on("dblclick", function(e){
        e.preventDefault();  //cancel system double-click event
         alert('Double click');
    });

	
});