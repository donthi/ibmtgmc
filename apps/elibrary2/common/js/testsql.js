/*
 * Licensed Materials - Property of IBM
 * 5725-G92 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

function wlCommonInit() {

}


function delect(){
	var a = document.getElementById("contactId").value;
	
	var invocationData = {
			adapter : "sql",
			procedure : "procedelect",
			parameters:[a]
		};

		var options = {
			onSuccess : delectSuccess,
			onFailure : delectFailure
		};

		WL.Client.invokeProcedure(invocationData, options);

}

function delectSuccess(result) {
	
	alert("success"	);
}

function delectFailure(result) {
	console.log("Inside loadContactError " + result);
}


//******************************************************************
function insert() {
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
		adapter : "sql",
		procedure : "insertinto",
		parameters:[buy_id,buy_title,buy_author,buy_press,buy_pricing,buy_ISBN,school_number,who_buy,dep,col]
	}

	var options = {
		onSuccess : insertSuccess,
		onFailure : insertFailure
	}

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
