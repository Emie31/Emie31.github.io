var header = document.querySelector("#siteWrapper header");
function scrolled(){
	var windowHeight = document.body.clientHeight,
		currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
	
	header.className = (currentScroll >= 70*windowHeight/100 -header.offsetHeight) ? "fixed" : "";
//	header.className = "fixed" ;
}

addEventListener("scroll", scrolled, false);

var header = document.querySelector("#siteWrapper header");

$('#siteWrapper #menu a').click( function() {
	var page = $(this).attr('href'); 
	var speed = 750; // gérer la vitesse de défliement
       
    // Ici on retranche la hauteur du bandeau (201px dans ta feuille de styles)
	$('html, body').animate( { scrollTop: $(page).offset().top - 90 }, speed );
	return false;
});

/*var h = window.innerHeight;
var myElements = document.querySelectorAll(".mama-bear");
for (var i = 0; i < myElements.length; i++){
	myElements[i].style.min-height= h+"px";
}*/

/* PROJECTS HOVER */
$(this).find(".overlayer").stop().animate({"opacity": "0"}, 300);

$(".exp").hover(
function() {
	//if ( $(this).find(".overlayer").offset().top > $("#menu").offset().top + 80) { /* to avoid overlay the navbar */
		$(this).find(".overlayer").stop().animate({"opacity": "1"}, 300);
	//}
},
function() {
	$(this).find(".overlayer").stop().animate({"opacity": "0"}, "slow");
});


$(".exp").mousemove( 
function() {
	if($(this).find(".overlayer").css("opacity") == 0){  /* if not already doing it */
	//	if ( $(this).find(".overlayer").offset().top > $("#menu").offset().top + 80) {  /* to avoid overlay the navbar */
			$(this).find(".overlayer").stop().animate({"opacity": "1"}, 300);
	//	}
	}
}
);