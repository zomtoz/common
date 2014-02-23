// JavaScript Document
$(document).ready(function() {

	//move the image in pixel
	var move = 0;
	
	//zoom percentage, 1.2 =120%
	var zoom = 1;

	//On mouse over those thumbnail
	$('.item').hover(function() {
		
		//Set the width and height according to the zoom percentage
		width = $('.item').width() * zoom;
		height = $('.item').height() * zoom;
		
		//Move and zoom the image
		$(this).find('img').stop(false,true).animate({'width':width, 'height':height, 'top':move, 'left':move}, {duration:400});
		
		//Display the caption
		$(this).find('div.caption').stop(false,true).fadeIn(400);
	},
	function() {
		//Reset the image
		$(this).find('img').stop(false,true).animate({'width':$('.item').width(), 'height':$('.item').height(), 'top':'0', 'left':'0'}, {duration:0});	

		//Hide the caption
		$(this).find('div.caption').stop(false,true).fadeOut(0);
	});

});