$(document).ready(function() {

   //CAT 1
	var $click__count1 = $('#click__count1');
   var $cat1__name = $('#cat1__name');
   var click1 = 0;

   // Set cat1 name
	$cat1__name.text('Kit');

   $('#cat1').click(function() {
   		console.log('Kitty1 has been clicked!');

   		if (click1 === 100) {
   			alert('100 clicks... Get a life! Go read a book!');
   		} else{
   		   // add a click on click
   			click1++;
   			// change score
   			$click__count1.text(+ click1);
   		}
   });


   // CAT 2
   var $click__count2 = $('#click__count2');
   var $cat2__name = $('#cat2__name');
   var click2 = 0;

   // Set cat2 name
   $cat2__name.text('Kit');

   $('#cat2').click(function() {
         console.log('Kitty2 has been clicked!');

         if (click2 === 100) {
            alert('100 clicks... Get a life! Go read a book!');
         } else{
            // add a click on click
            click2++;
            // change score
            $click__count2.text(+ click2);
         }
   });


});
