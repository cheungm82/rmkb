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

	$("#mobile-menu-trigger").on("click", function(e){
		e.preventDefault();
		$("#nav dl").slideToggle(300);
	});

	$("#nav dl a").on("click", function(e){
		$("#nav dl").slideUp(300);
	});

	resizeFullscreenDiv();
	
	console.log('Type "our rmkb" for a little surprise. =D');
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
	if(e.keyCode == 79 || down.length >= 9){down = [];}
	if(e.keyCode != 16){down.push(e.keyCode);}
}).keyup(function(e) {
	console.log(down);
	if(down[0] == 79 && down[1] == 85 && down[2] == 82 && down[3] == 32){
		teamli = $("#team ul");
		if(!down[4]){
			$(document).scrollTop( $("#team").offset().top );
		} else if(down[4] == 82 && !down[5]){ // R
			teamli.children(":nth-child(1)").find("span img").attr("src","img/team/ronald2.jpg");
		} else if(down[4] == 82 && down[5]== 77 && !down[6]){ // M
			teamli.children(":nth-child(2)").find("span img").attr("src","img/team/michael2.jpg");
		} else if(down[4] == 82 && down[5]== 77 && down[6] == 75 && !down[7]){ // K
			teamli.children(":nth-child(3)").find("span img").attr("src","img/team/kevin2.jpg");
		} else if(down[4] == 82 && down[5]== 77 && down[6] == 75 && down[7] == 66){ // B
			teamli.children(":nth-child(4)").find("span img").attr("src","img/team/benson2.jpg");
		}

	}
	if(down[5] == 82 && down[6] == 77 && down[7] == 75 && down[8] == 66){

	}
});