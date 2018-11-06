function get_all_spoilers() { 
	return document.getElementsByClassName("spoiler"); 
}

function toggle_spoiler_display_closure(spoiler) {
	return function () {
		spoiler.classList.toggle("spoiler__hidden");
		spoiler.classList.toggle("spoiler__visible");
	}
}

// Apply this function to all spoilers on the page.
function make_subscribution_for_all_spoilers() {
	var all_spoilers = get_all_spoilers();
	
	for(var i = 0; i < all_spoilers.length; i++) {
		var spoiler = all_spoilers[i];
		var more_link = spoiler.previousElementSibling;		// TODO: add unique ids to spoilers and links

		more_link.addEventListener("click", toggle_spoiler_display_closure(spoiler));
	}
}

// Script main body.
if(document.readyState !== "loading") {
	make_subscribution_for_all_spoilers();
}
else {
	document.addEventListener("DOMContentLoaded", make_subscribution_for_all_spoilers);
}