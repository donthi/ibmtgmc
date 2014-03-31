
/* JavaScript content from js/service.js in folder common */
/*
*  Licensed Materials - Property of IBM
*  5725-G92 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
*  US Government Users Restricted Rights - Use, duplication or
*  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

currentPage={};

currentPage.init = function() {
	WL.Logger.debug("Page2 :: init");
};

currentPage.buttonClick = function() {
	WL.Logger.debug("Page2 :: buttonClick");
	WL.SimpleDialog.show("Page2","Button on Page2 was clicked",[{text:'OK'}]);
};

currentPage.loadPage1 = function(){
	WL.Logger.debug("service :: loadPage1");
	pagesHistory.push("pages/Page2.html");
	$("#pagePort").load("pages/Page1.html", function(){
		currentPage.init();
	});
};

currentPage.back = function(){
	WL.Logger.debug("Page2 :: back");
	$("#pagePort").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
};

currentPage.loadsingin = function(){
	WL.Logger.debug("service :: loadsingin");
	pagesHistory.push("pages/service.html");
	$("#pagePort").load("pages/singin.html", function(){
		currentPage.init();
	});
};

currentPage.loadfind = function(){
	WL.Logger.debug("service :: loadrecommend");
	pagesHistory.push("pages/service.html");
	$("#pagePort").load("pages/find.html", function(){
		currentPage.init();
	});
};

currentPage.loadrecommend = function(){
	WL.Logger.debug("service :: loadrecommend");
	pagesHistory.push("pages/service.html");
	$("#pagePort").load("pages/recommend.html", function(){
		currentPage.init();
	});
};
