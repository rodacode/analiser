
function analyzer(form){
	var str;
	var y = $(str).html();
	var urlInput = form.inputbox.value;
	console.log(urlInput);
	$.getJSON('http://www.whateverorigin.org/get?url=http://' + encodeURIComponent(form.inputbox.value) + '&callback=?', function(data){
		str =data.contents;
		console.log(str);
	});
 	var regexTitle = /<title>/;

 	var code = document.createTextNode(str); 
 	var showCode = document.getElementById("showCode");
 	showCode.appendChild(code); 
 	if(regexTitle.test(str)){
 		var title ="title Tag";
	  	document.getElementById("show").innerHTML = "<p class='analisis-line'>" + title + "</p>"; 
	} 
	else{
 		answer="We couldn´t find any title tag";
 	 	document.getElementById("show").innerHTML = answer; 
 	}
 }

