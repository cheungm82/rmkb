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
	// ZURB Magellan plugin - Top nav bar
	$(document).foundation({
		"magellan-expedition": {
			active_class: 'active', // specify the class used for active sections
			destination_threshold: 35, // pixels from the top of destination for it to be considered active
			throttle_delay: 50 // calculation throttling to increase framerate
		}
	});

	// Triggers menu in when on smaller screens
	$("#mobile-menu-trigger").on("click", function(e){
		e.preventDefault();
		$("#nav dl").slideToggle(300);
	});

	$("#nav dl a").on("click", function(e){
		$("#nav dl").slideUp(300);
	});

	// Portfolio company information modal trigger
	$(".block-list li").on("click", function(e){
		if(!$(this).hasClass('active')){
			$(this).addClass('active').parent().addClass('detail');
			$(this).find('.folio_img').addClass('small-12 large-3 columns');
			$(this).find('.folio_desc').addClass('small-12 large-9 columns');
			$('#portfolio > span').slideDown('fast');

			// change company logo to colored version
			var imgurl = $(this).find('.folio_img img').attr('src');
			imgurl = imgurl.split('.');
			$(this).find('.folio_img img').attr('src',imgurl[0] + '2.' + imgurl[1]);
		}
	});

	$('#portfolio > span').on("click", function(e){
		var list = $(".block-list li.active");
		if(list.hasClass('active')){
			list.removeClass('active').parent().removeClass('detail');
			list.find('.folio_img').removeClass('small-12 large-3 columns');
			list.find('.folio_desc').removeClass('small-12 large-9 columns');
			$('#portfolio > span').slideUp('fast');

			// change company logo to grey version
			var imgurl = list.find('.folio_img img').attr('src');
			imgurl = imgurl.split('2');
			list.find('.folio_img img').attr('src',imgurl[0] + imgurl[1]);
		}
	});

	// Other Functions
	resizeFullscreenDiv();
	
	preload([
		'img/team/ronald2.jpg',
		'img/team/michael2.jpg',
		'img/team/kevin2.jpg',
		'img/team/benson2.jpg'
	]);

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

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}