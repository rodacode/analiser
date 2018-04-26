var form;
var str;
var inputUrl;


var y = $(str).html();


async function getUrl(form){
	console.log('getUrl: '+form.inputbox.value);
	inputUrl = form.inputbox.value;
	console.log(inputUrl);	
	var x = $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('http://'+ inputUrl) + '&callback=?', function(data){
		return str = data.contents;
		console.log('CODE:::::'+str);
	});
	console.log('x: '+str);
    await analyzer(str);

}



function analyzer(str){
	showSourceCode(str);
	checkTags(str);
	console.log('analyzer: ' + str);
}

function showSourceCode(str){

	var y = $(str).html();
	var code = document.createTextNode(str); 
	var showCode = document.getElementById("showCode");
	showCode.appendChild(code); 
	console.log('showSourceCode: ' + str);
}

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
}
