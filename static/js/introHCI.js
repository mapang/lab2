'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {  // change this to .project? #57
		$('.jumbotron h1').text("Javascript is connected");
	});
function projectClick(e){
	e.preventDefault();
	$(this).css("background-color", "#7fff00");
}
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}