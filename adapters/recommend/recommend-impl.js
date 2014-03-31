
function postjason(data) {
	
	
	var input = {
	    method : 'post',
	    returnedContentType : 'json',
	    path : "brs/jasonrecommend.php",
	    parameters :{
	    	'JData' : data
	    }
	};
	
	
	return WL.Server.invokeHttp(input);
}

function getStoriesFiltered(interest) {
	path = getPath(interest);
	
	var input = {
	    method : 'get',
	    returnedContentType : 'xml',
	    path : path,
	    transformation : {
		    type : 'xslFile',
		    xslFile : 'filtered.xsl'
	    }
	};
	
	return WL.Server.invokeHttp(input);
}



function getPath(interest) {
	if (interest == undefined || interest == '') {
		interest = '';
	}else {
		interest = '_' + interest;
	}
	return 'rss/edition' + interest + '.rss';
}

