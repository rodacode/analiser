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
		checkTags(data.contents);
		console.log('CODE:'+data.contents);
		str = data.contents;
	});

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
	var regexH1 = /<h1>/;
	if(regexTitle.test(str)){
		var title ="title Tag";
		document.getElementById("show").innerHTML = "<p class='analisis-line text-center'>" + title + "</p>"; 
	} 
	else{
		answer="We couldn´t find any title tag";
		document.getElementById("show").append(answer);
	}
	if(regexH1.test(str)){
		var h1 ="h1 Tag";
		document.getElementById("show").append("<p class='analisis-line text-center'>" + h1 + "</p>"); 
	} 
	else{
		answer="We couldn´t find any h1 tag";
		document.getElementById("show").append(answer); 
	}
};
