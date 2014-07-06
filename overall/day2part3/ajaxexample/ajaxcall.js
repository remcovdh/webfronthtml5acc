// Will not work for realy old fashioned browsers like IE5/6

function ajaxCall() {
	xmlhttp=new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			document.getElementById("ajaxcontent").innerHTML=xmlhttp.responseText;
		}
	}

	xmlhttp.open("GET","ajaxtesttext.txt",true);
	xmlhttp.send();
}