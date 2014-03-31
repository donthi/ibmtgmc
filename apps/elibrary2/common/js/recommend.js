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





currentPage.back = function(){
	WL.Logger.debug("Page2 :: back");
	$("#pagePort").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
};
currentPage.loadsingin = function(){
	WL.Logger.debug("recommend :: loadsingin");
//	pagesHistory.push("pages/recommend.html");
	$("#pagePort").load("pages/singin.html", function(){
		currentPage.init();
	});
};


//******************************************************************
function jasoninsert() {
	// $.mobile.showPageLoadingMsg();

	var buy_id  = document.getElementById('rid').value;
	var buy_title = document.getElementById('bookname').value+"";
	
	var buy_author = document.getElementById('author').value+"";
	var buy_press = document.getElementById('press').value+"";
	var buy_pricing = document.getElementById('pricing').value;
	var buy_ISBN = document.getElementById('isbn').value;
	var school_number = document.getElementById('schoolnumber').value+"";
	var who_buy = document.getElementById('who').value+""+"";
	var dep = document.getElementById('dep').value+"";
	var col = document.getElementById('col').value+"";
	
	

	
	var invocationData = {
		adapter : "recommend",
		procedure : "postjason",
		parameters:[{ buy_id: buy_id, buy_title: buy_title, buy_author: buy_author,buy_press: buy_press,buy_pricing: buy_pricing,buy_ISBN: buy_ISBN,school_number: school_number,who_buy: who_buy,dep: dep,col: col }]
	};

	var options = {
		onSuccess : insertSuccess,
		onFailure : insertFailure
	};

	WL.Client.invokeProcedure(invocationData, options);

}

function insertSuccess(result) {
			
	//	arlt("success");
		$("#pagePort").load("pages/service.html", function(){
			currentPage.init();
		});
	
}

function insertFailure(result) {
	console.log("Inside loadContactError " + result);
}


//***********************************************************************************************
