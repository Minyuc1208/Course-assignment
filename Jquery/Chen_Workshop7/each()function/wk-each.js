$(document).ready(function(){
    $("button").click(function(){
// your code will go here 
        $('li').each(function(){
        alert($(this).text());
        console.log($(this).text());
        });
            
    });
});