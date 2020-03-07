/* For exercise 1:
	in this file, attach an event handler to the image object you named in your HTML file
	(using getElementbyId and referring to the ID that you set in the HTML)
	The event handler should handle the "click" event and should simply swap the
	handle_up.jpg image with the handle_down.jpg image */

var slots=["heart.jpg","clover.jpg","star.jpg"];

var element = document.getElementById("handle");
element.addEventListener("click", function(event){
			pullHandle(event.currentTarget);
		}, false);


function pullHandle(currentTarget) {
	if (currentTarget.getAttribute("src") == "handle_up.jpg") {
		currentTarget.setAttribute("src","handle_down.jpg");
        takeASpin();
         setTimeout(function () {
            currentTarget.setAttribute("src", "handle_over.jpg");
        }, 200);
        setTimeout(function () {
            currentTarget.setAttribute("src", "handle_up.jpg");
        }, 500);
    }
	}
    
    function takeASpin() {

	/* You COULD also handle each of the three slots without looping through them
		by writing the randomization code three times, but a loop is more efficient!
		We can do this because I asked you to name the slots with a number at the end,
		which we can then manipulate by adding the number to the string "slot".
		
		Note that we count from 1 instead of 0 here because we named the slots
		1, 2, and 3 -- we could have also named them 0, 1, and 2, or any other
		"loopable" set of three numbers! */
   var roll=setInterval(function(){
	for (var i=1; i<=3; i++) {
		// the next line chooses a number between 0 and 2 and gets that array item
		var randomSymbol = slots[Math.floor(Math.random()*3)];
		var currSlot = document.getElementById("slot"+i);
		currSlot.setAttribute("src", randomSymbol);
	}
 },50);
        
        var stop=setTimeout(function(){
            clearInterval(roll);
        },1000);
        
        setTimeout(win,1000);
    }
	
	/* I have deliberately left this as an ugly and inefficient conditional
		 as an exercise for you: can you simplify it? */
function win(){
    var slot1 =document.getElementById("slot1").getAttribute("src");
    var slot2 =document.getElementById("slot2").getAttribute("src");
    var slot3 =document.getElementById("slot3").getAttribute("src");
	if (slot1 ==slot2&&slot2 ==slot3) {
			document.getElementById("machine_text").setAttribute("src","display_win.jpg");
        var back=setTimeout(function(){
            document.getElementById("machine_text").setAttribute("src","display_start.jpg");
        },3000);
		}
 }


