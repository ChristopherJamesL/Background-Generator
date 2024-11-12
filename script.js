var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function initialGradient() {
	const button = document.querySelector('button');
	color1.setAttribute("value", '#4FDDCD');
	color2.setAttribute("value", "#A6F7D6"); 
	css.textContent = "linear-gradient(to right, " + 'rgb(79, 221, 205)' + ", " + 'rgb(166, 247, 214)' + ");";
}

initialGradient();

function setGradient() {
	let button = document.querySelector('button');
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	button.style.background = "linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

// *****Create Button*****



function addButton() {
	var button = document.createElement("button");
	var textNode = document.createTextNode("Get Freaky!");
	button.appendChild(textNode);
	body.appendChild(button);
	button.style.background = "linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";
}

addButton();

//*****Change Button*****

const changeButton = () => {
	const button = document.querySelector('button');
	button.style.background = "linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";
}

// *****Button Function*****

var buttonR = document.querySelector("button");

function randomRgb() {
    // var o = Math.round, r = Math.random, s = 255;
    color1.value = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    color2.value = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    setGradient();
    // color1.value = 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
    // color2.value = 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
    // return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}



buttonR.addEventListener("click", randomRgb);

buttonR.addEventListener('click', changeButton);	


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);