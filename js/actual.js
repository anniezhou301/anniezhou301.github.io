var home=document.getElementById('about');
var portfolio=document.getElementById('portfolio');
var price=document.getElementById('price');
var contact=document.getElementById('contact'); 
$(li).on('click',function(e){ // click the link
    
    home.addClass('animated fadeInDown'); // add the animation class

        // do something after 1000ms (or same as animation duration)
});
$(li).on('click',function(e){ // click the link
    
    portfolio.addClass('animated fadeInDown'); // add the animation class

        // do something after 1000ms (or same as animation duration)
});
$('#pric').on('click',function(e){ // click the link
    
    price.addClass('animated fadeInDown'); // add the animation class

        // do something after 1000ms (or same as animation duration)
});
$('#contac').on('click',function(e){ // click the link
    
    $('#contact').addClass('animated fadeInDown'); // add the animation class

        // do something after 1000ms (or same as animation duration)
});

$(document).ready(function(){
	function myFunction() {
    document.getElementById("price").addClass('animated fadeInDown');
};
});