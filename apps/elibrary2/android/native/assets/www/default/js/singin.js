
/* JavaScript content from js/singin.js in folder common */
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


currentPage.loadservice = function(){
	WL.Logger.debug("singin :: loadservice");
	pagesHistory.push("pages/singin.html");
	$("#pagePort").load("pages/service.html", function(){
		currentPage.init();
	});
};