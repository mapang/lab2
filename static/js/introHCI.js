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
	console.log("Project clicked");

	e.preventDefault(); // cancel the default action, which prevents the page from reloading
	
	//In an event listener, $(this) is the element that fired from the event
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);
	$(this).css("background-color", "#7fff00");
}
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

	$("a.thumbnail").click(projectClick);
}