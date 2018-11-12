document.getElementById("convertURL").addEventListener("click", function () {
	//Get parameters
	var urlSep = document.querySelector('.urlsep:checked').value;

	var urlformat = document.querySelector('.urlformat:checked').value;

	var lTarget = document.getElementById("lTarget").value;

	var newCode = document.getElementById("oldText").value ;

	
	var formatStart = "";
	var formatEnd = "";
	var targetCode = "";
	if(urlformat == "paragraph"){
		formatStart = "<p>";
		formatEnd = "</p>";
	}else if(urlformat == "br"){
		formatStart = "";
		formatEnd = "<br />";
	}else if(urlformat == "div"){
		formatStart = "<div>";
		formatEnd = "</div>";
	}else if(urlformat == "ul"){
		formatStart = "<li>";
		formatEnd = "</li>";
	}else if(urlformat == "ol"){
		formatStart = "<li>";
		formatEnd = "</li>";
	}else{
		formatStart = "";
		formatEnd = "";
	}
	if(lTarget != "nope"){
		targetCode = ' target="' + lTarget + '"';
	}
			
		if(urlSep){
			
			if (urlSep == "line"){
				newCode = newCode.replace(/(\n\r|\n|\r)/gm,"XbreakX");
				re1a = /\s+/g;
				newCode = newCode.replace(re1a,"");
				re1b = /XbreakX/gi;
				newCode = newCode.replace(re1b," ");
				newCode = newCode.replace(re1a," ");
				newCode = newCode.trim();
				
				var newCodeArray = newCode.split(" ");
				newCode = "";
				for (var i = 0; i < newCodeArray.length; i++) {
					if (newCodeArray[i] != ""){
						if(i == newCodeArray.length -1 && urlformat == "br"){
							newCodeArray[i] = formatStart + '<a href="' + newCodeArray[i] +'"' + targetCode + '>'+ newCodeArray[i] +'</a><br>\n';
						}else{
							newCodeArray[i] = formatStart + '<a href="' + newCodeArray[i] +'"' + targetCode + '>'+ newCodeArray[i] +'</a><br>'+ formatEnd +'\n';
	    				}
						newCode = newCode + newCodeArray[i];
					}
				}
				
				if(urlformat == "br"){
					newCode = "<p>\n" + newCode + "</p>";
				}
				if(urlformat == "ul"){
					newCode = "<ul>\n" + newCode + "</ul>";
				}
				if(urlformat == "ol"){
					newCode = "<ol>\n" + newCode + "</ol>";
				}
				
				document.getElementById("newCode").value = newCode;
	
			}else if(urlSep == "comma"){
				newCode = newCode.replace(/(\n\r|\n|\r)/gm," ");
				re1a = /\s+/g;
				newCode = newCode.replace(re1a,"");
				newCode = newCode.trim();
			
				var newCodeArray = newCode.split(",");
				newCode = "";
				for (var i = 0; i < newCodeArray.length; i++) {
					if (newCodeArray[i] != ""){
						if(i == newCodeArray.length -1 && urlformat == "br"){
							newCodeArray[i] = formatStart + '<a href="' + newCodeArray[i] +'"' + targetCode + '>'+ newCodeArray[i] +'</a><br>\n';
						}else{
							newCodeArray[i] = formatStart + '<a href="' + newCodeArray[i] +'"' + targetCode + '>'+ newCodeArray[i] +'</a><br>'+ formatEnd +'\n';
	    				}
						newCode = newCode + newCodeArray[i];
					}
				}
				
				if(urlformat == "br"){
					newCode = "<p>\n" + newCode + "</p>";
				}
				if(urlformat == "ul"){
					newCode = "<ul>\n" + newCode + "</ul>";
				}
				if(urlformat == "ol"){
					newCode = "<ol>\n" + newCode + "</ol>";
				}
				
				document.getElementById("newCode").value = newCode;
				
			
			}else if(urlSep == "space"){
				newCode = newCode.replace(/(\n\r|\n|\r)/gm," ");
				re1a = /\s+/g;
				newCode = newCode.replace(re1a," ");
				newCode = newCode.trim();
				
				var newCodeArray = newCode.split(" ");
				newCode = "";
				for (var i = 0; i < newCodeArray.length; i++) {
					if (newCodeArray[i] != ""){
						if(i == newCodeArray.length -1 && urlformat == "br"){
							newCodeArray[i] = formatStart + '<a href="' + newCodeArray[i] +'"' + targetCode + '>'+ newCodeArray[i] +'</a><br>\n';
						}else{
							newCodeArray[i] = formatStart + '<a href="' + newCodeArray[i] +'"' + targetCode + '>'+ newCodeArray[i] +'</a><br>'+ formatEnd +'\n';
	    				}
						newCode = newCode + newCodeArray[i];
					}
				}
				
				if(urlformat == "br"){
					newCode = "<p>\n" + newCode + "</p>";
				}
				if(urlformat == "ul"){
					newCode = "<ul>\n" + newCode + "</ul>";
				}
				if(urlformat == "ol"){
					newCode = "<ol>\n" + newCode + "</ol>";
				}
				
				document.getElementById("newCode").value = newCode;
	
			}
		}
});	

	//reset text areas
	document.getElementById("clearText").addEventListener("click", function () {
		document.getElementById("oldText").value = "";
		document.getElementById("newCode").value = "";
		document.getElementById("oldText").focus();
	});	

	var textBox = document.getElementById("newCode");
	textBox.onfocus = function() {
		textBox.select();
		textBox.onmouseup = function() {
			textBox.onmouseup = null;
			return false;
		};
	};