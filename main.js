var str;
var x = $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('http://google.com') + '&callback=?', function(data){
	str =data.contents;
	console.log(str);
});

var y = $(str).html();

function analyzer(form){
 var regex = /<title>/;
 //var str = form.inputbox.value;
 if(regex.test(str)){
 	answer="We found a title Tag";
	  document.getElementById("show").innerHTML = "<p class='analisis-line'>" +answer + "</p>"; 
	  var code = document.createTextNode(str); 
	  var showCode = document.getElementById("showCode");
	  showCode.appendChild(code); 
	 // var codeText =  code.replace("<!doctype html>", "aaa");
	//document.getElementById("showCode").innerHTML = "<!--" + code + "-->";
	console.log(code);
 	} else{
 	answer="We couldn´t find any title tag";
 	 document.getElementById("show").innerHTML = answer; 

 	}
 }


 var h = document.createElement("H1")                // Create a <h1> element
var t = document.createTextNode("Hello World");     // Create a text node
h.appendChild(t); 
