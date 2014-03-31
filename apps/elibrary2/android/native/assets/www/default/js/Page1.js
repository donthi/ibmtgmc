
/* JavaScript content from js/Page1.js in folder common */

currentPage={};

currentPage.init = function() {
	WL.Logger.debug("Page1 :: init");
};

currentPage.buttonClick = function() {
	WL.Logger.debug("Page1 :: buttonClick");
	WL.SimpleDialog.show("Page1","Button on Page1 was clicked",[{text:'OK'}]);
};

currentPage.insertFragment = function() {
	WL.Logger.debug("Page1 :: insertFragment");
	$("#FragmentsDiv").load("pages/fragment.html");
};

currentPage.back = function(){
	WL.Logger.debug("Page1 :: back");
	$("#pagePort").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
};
currentPage.loadPage = function(pageIndex){
	WL.Logger.debug("MainPage :: loadPage :: pageIndex: " + pageIndex);
	pagesHistory.push("pages/MainPage.html");
	$("#pagePort").load("pages/Page" + pageIndex + ".html", function(){
		currentPage.init();
	});
};

currentPage.loadbooknews = function(){
	WL.Logger.debug("Page2 :: loadPage1");
	pagesHistory.push("pages/booknews.html");
	$("#pagePort").load("pages/booknews.html", function(){
		currentPage.init();
	});
};