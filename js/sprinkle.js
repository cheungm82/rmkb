/* Load content dynamically depending on browser size */
/* var size = window.getComputedStyle(document.body,':after').getPropertyValue('content');
if (size == 'smartphone') {
    // Load some more content.
}
*/
var sliderH; /* Slider Height */


$(window).bind('resize',function() {
	/* do something when browser window resizes */
	resizeFullscreenDiv();

	// reflow magellan
	$(document).foundation();
});

$(function(){
	$(document).foundation({
		"magellan-expedition": {
			active_class: 'active', // specify the class used for active sections
			destination_threshold: 35, // pixels from the top of destination for it to be considered active
			throttle_delay: 50 // calculation throttling to increase framerate
		}
	});

	resizeFullscreenDiv();
	
	console.log('Looking for something?');
	console.log('Type "i love rmkb" for a surprise. =D');
});


// -------------------------------------------------------------------------------------------------------
// FUNCTIONS
// -------------------------------------------------------------------------------------------------------

function resizeFullscreenDiv() {
	var x = $(window).height();
	$('.fullscreen').css("min-height", x + "px");
}

var down = [];
$(document).keydown(function(e) {
	if(e.keyCode == 73 || down.length >= 11){down = [];}
	if(e.keyCode != 16){down.push(e.keyCode);}
}).keyup(function(e) {
	if(down[0] == 73 && down[1] == 32 && down[2] == 76 && down[3] == 79 && down[4] == 86 && down[5] == 69 && down[6] == 32 && down[7] == 82 && down[8] == 77 && down[9] == 75 && down[10] == 66){
		$('#modal').foundation('reveal', 'open', '_fun.php');
	}
});