// Some constants for translating paths from low resolution photos folder to higher resolution folder. Just avoid having `112` and `240` in photos names. :)
const lowres_image_folder_a = "112";
const lowres_image_folder_b = "240";
const hires_image_folder = "1024";

// Some wrappers for better understanding of the target scope.
function get_all_sections() { 
	return document.getElementsByTagName("section"); 
}

function get_all_photos_in_section(dom_element) {
	var all_imgs = dom_element.getElementsByTagName("img"); 
	var all_imgs_as_array = Array.from(all_imgs);
	var applicable_imgs = all_imgs_as_array.reduce(function(result, img) {
		if(!img.attributes["no-enlarger"]){
			result.push(img);
		}
		return result;
	}, []);
	return applicable_imgs;
}

function change_image_path(path, resolution_from, resolution_to) {
	return path.replace(resolution_from, resolution_to);
}

function get_path_for_bigger_image(lowres_image_path) {
	var hires_image_path = change_image_path(lowres_image_path, lowres_image_folder_a, hires_image_folder);
	hires_image_path = change_image_path(hires_image_path, lowres_image_folder_b, hires_image_folder);
	return hires_image_path;
}

// This will show picture on popup.
function show_image_on_popup(image_path) {
	var photo_enlarger_main_image = document.getElementById("photo_enlarger__photo");
	photo_enlarger_main_image.src = image_path;
	
	view_model.show_photo_enlarger();
}

function create_closure_for_show_fullsize_image(lowres_image_path) {
	return function() { 
		var hires_image_path = get_path_for_bigger_image(lowres_image_path);
		show_image_on_popup(hires_image_path); 
	};
}

// Apply this function to all photos on page.
function make_subscribution_for_all_photos() {
	var all_sections = get_all_sections();
	
	for(var i = 0; i < all_sections.length; i++) {
		var all_photos_in_section = get_all_photos_in_section(all_sections[i]);
		
		for(var j = 0; j < all_photos_in_section.length; j++) {
			var certain_photo = all_photos_in_section[j];
			certain_photo.onclick = create_closure_for_show_fullsize_image(certain_photo.src);
		}
	}
}

// Script main body.
if(document.readyState === "complete") {
	make_subscribution_for_all_photos();
}
else {
  document.addEventListener("DOMContentLoaded", make_subscribution_for_all_photos, false);
}