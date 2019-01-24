// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
var i = "0"
// "el" stands for the "element" that was just clicked
function allOpaque(el){
	el.classList.add("opaque");
	document.getElementById("pats-img").classList.add("opaque");
}

// "el" stands for the "element" that was just clicked
function removeColor(el){
	document.getElementById("rams-column").classList.remove("rams-blue");
	document.getElementById("pats-column").classList.remove("pats-silver");
	
}

function showTrophy(el){
	if (i == "0"){
		document.images["rams-img"].src = "images/lombardi_trophy.png";
		i = "1";
	}
	else if (i == "1"){
		document.images["wat"].src = "images/lombardi_trophy.png";
		document.images["pats-img"].src = "images/lombardi_trophy.png";
	}
}
