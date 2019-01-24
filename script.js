// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
var a = "0"
var b = "0"
var c = "0"
// "el" stands for the "element" that was just clicked
function allOpaque(el){
	if (a == "0") {
		el.classList.add("opaque");
		document.getElementById("pats-img").classList.add("opaque");
		a = "1";
	}
	else if (a == "1") {
		el.classList.remove("opaque");
		document.getElementById("pats-img").classList.remove("opaque");
		a = "0";
	}
}

// "el" stands for the "element" that was just clicked
function removeColor(el){
	if (b == "0") {
		document.getElementById("rams-column").classList.remove("rams-blue");
		document.getElementById("pats-column").classList.remove("pats-silver");
		b = "1";
	}
	else if (b == "1") {
		document.getElementById("rams-column").classList.add("rams-blue");
		document.getElementById("pats-column").classList.add("pats-silver");
		b = "0";
	}
}

function showTrophy(el){
	if (c == "0"){
		document.images["rams-img"].src = "images/lombardi_trophy.png";
		c = "1";
	}
	else if (c == "1"){
		document.images["wat"].src = "images/lombardi_trophy.png";
		document.images["pats-img"].src = "images/lombardi_trophy.png";
		c = "2";
	}
	else if(c == "2"){
		document.images["rams-img"].src = "images/rams_logo.png"
		document.images["wat"].src = ""
		document.images["pats-img"].src = "images/pats_logo.png"
		c = "0";
	}
}
