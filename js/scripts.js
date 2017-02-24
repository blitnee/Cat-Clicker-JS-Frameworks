$(document).ready(function() {

	var $click__count = $('#click__count');
	var click = 0;

	$('#cat__image').click(function() {
   		console.log('This kitty has been clicked!');

   		if (click === 100) {
   			alert('100 clicks... Get a life! Go read a book!');
   		} else{
   		   	// add a click on click
   			click++;
   			// change score
   			$click__count.text(+ click);
   		}
   });


});
