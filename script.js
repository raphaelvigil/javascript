// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
var a = 0
var b = 0
var c = 0
var d = 0
// "el" stands for the "element" that was just clicked
function allOpaque(el){
	if (a == 0) {
		el.classList.add("opaque");
		document.getElementById("pats-img").classList.add("opaque")
		document.getElementById("text-1").classList.add("invisible")
		document.getElementById("text-2").classList.add("invisible")
		document.getElementById("text-3").classList.add("invisible")
		a = 1
	}
	else if (a == 1) {
		el.classList.remove("opaque");
		document.getElementById("pats-img").classList.remove("opaque")
		document.getElementById("text-1").classList.remove("invisible")
		document.getElementById("text-2").classList.remove("invisible")
		document.getElementById("text-3").classList.remove("invisible")
		a = 0
	}
}

function removeColor(el){
	if (b == 0) {
		document.getElementById("rams-column").classList.remove("rams-blue")
		document.getElementById("pats-column").classList.remove("pats-silver")
		document.getElementById("text-1").classList.add("invisible")
		document.getElementById("text-2").classList.add("invisible")
		document.getElementById("text-3").classList.add("invisible")
		b = 1
	}
	else if (b == 1) {
		document.getElementById("rams-column").classList.add("rams-blue")
		document.getElementById("pats-column").classList.add("pats-silver")
		document.getElementById("text-1").classList.remove("invisible")
		document.getElementById("text-2").classList.remove("invisible")
		document.getElementById("text-3").classList.remove("invisible")
		b = 0
	}
}

function showTrophy(el){
	if (c == 0){
		document.images["rams-img"].src = "images/lombardi_trophy.png"
		document.getElementById("text-1").classList.add("invisible")
		document.getElementById("text-2").classList.add("invisible")
		document.getElementById("text-3").classList.add("invisible")
		c = 1
	}
	else if (c == 1){
		document.images["wat"].src = "images/lombardi_trophy.png"
		document.images["pats-img"].src = "images/lombardi_trophy.png"
		c = 2
	}
	else if(c == 2){
		document.images["rams-img"].src = "images/rams_logo.png"
		document.images["wat"].src = ""
		document.images["pats-img"].src = "images/pats_logo.png"
		document.getElementById("text-1").classList.remove("invisible")
		document.getElementById("text-2").classList.remove("invisible")
		document.getElementById("text-3").classList.remove("invisible")
		c = 0
	}
}

function jon(el){
	if (d == 0){
		document.images['rams-img'].src = "images/Jon.png"
		document.images["wat"].src = "images/Jon.png"
		document.images["pats-img"].src = "images/Jon.png"
		d = 1
	}
	else if (d == 1){
		document.images["rams-img"].src = "images/wat.png"
		document.images["wat"].src = "images/wat.png"
		document.images["pats-img"].src = "images/wat.png"
		d = 2
	}
	else if (d < 10){
		document.images["rams-img"].src = "images/Jo.png"
		document.images["wat"].src = "images/Jo.png"
		document.images["pats-img"].src = "images/Jo.png"
		d = d + 1
	}
	else if (d == 10){
		document.images["rams-img"].src = "images/my_sol.png"
		document.images["wat"].src = "images/my_sol.png"
		document.images["pats-img"].src = "images/my_sol.png"
		d = 11
	}
	else if (d == 11){
		document.images["rams-img"].src = "images/rams_logo.png"
		document.images["wat"].src = ""
		document.images["pats-img"].src = "images/pats_logo.png"
		d = 0
	}
}

