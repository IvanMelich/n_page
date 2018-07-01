$(document).ready(function(){

	var writeBt = document.querySelector(".write-us");
	var popUp = document.querySelector(".pop-up");
	var popUpClose = document.querySelector(".close-pop-up");

	writeBt.addEventListener("click", function(event) {
		event.preventDefault();
		popUp.classList.add("pop-up-open");
	});

	popUpClose.addEventListener("click", function(event) {
		event.preventDefault();
		popUp.classList.remove("pop-up-open");
	})

	document.addEventListener("keydown", function(event) {
		event.preventDefault();
		if (event.keyCode === 27) {
			popUp.classList.remove("pop-up-open");
		}
	})
















});

	













