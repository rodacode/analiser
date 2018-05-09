var form;
var str;
var inputUrl;
var myHeaders = new Headers({
    'Content-Type': 'text/xml'
});
var y = $(str).html();


function getUrl(form){
	console.log('getUrl: '+form.inputbox.value);
	inputUrl = form.inputbox.value;
	console.log(inputUrl);	
	$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('http://'+ inputUrl) + '&callback=?', function(data){
		showSourceCode(data.contents);
		console.log('CODE:'+data.contents);
		str = data.contents;
	});

};



/*

// url (required), options (optional)
fetch('http://www.whateverorigin.org/get?url=' + encodeURIComponent('http://'+ inputUrl), {
	method: 'get',
	headers: myHeaders
}).then(function(response) {
	console.log(response);
}).catch(function(err) {
    // Error :(
});



*/

function analyzer(str){

	checkTags(str);
	console.log('analyzer: ' +inputUrl);

	console.log('analyzer: ' + str);
};

function showSourceCode(str){

	var y = $(str).html();
	var code = document.createTextNode(str); 
	var showCode = document.getElementById("showCode");
	showCode.appendChild(code); 
	console.log('showSourceCode: ' + str);
};

function checkTags(str){
	console.log('checkTags' + str);
	var regexTitle = /<title>/;
	if(regexTitle.test(str)){
		var title ="title Tag";
		document.getElementById("show").innerHTML = "<p class='analisis-line'>" + title + "</p>"; 
	} 
	else{
		answer="We couldn´t find any title tag";
		document.getElementById("show").innerHTML = answer; 
	}
};
