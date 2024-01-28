const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
		"alt":"Impressions tous formats"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		"alt":"Tirages haute définition"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
		"alt":"Grand choix de couleurs"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
		"alt":"Autocollants avec découpe laser"
	}
]

let currentIndex = 0

function addElement() {
	let newDivDot = document.createElement("div"); // Création nouvelle div
	newDivDot.classList.add("dot"); // Ajout d'une class pour la nouvelle div
	return newDivDot;
}

function addElementfromArray() {
	let classDots = document.querySelector(".dots"); // Récupération de la class "dots"

	for (let i = 0; i < slides.length; i++) {  
		let dot = addElement();
		classDots.appendChild(dot); // Ajout de la nouvelle div dans l'élément parent "dots"
	}
	setActiveDot(currentIndex);
}

addElementfromArray(); 


function setActiveDot(index) {
    let dots = document.querySelectorAll(".dot");

    dots.forEach((dot, i) => {
        dot.classList.toggle("dot_selected", i === index); // Ajoute la class "dot_selected" à l'image sur index
    });
}

const image = document.querySelector("#banner>img");
const texte = document.querySelector("#banner>p");


const flecheGauche = document.querySelector(".arrow_left");
	console.log(flecheGauche)

flecheGauche.addEventListener("click", clickGaucheCarrousel)

function clickGaucheCarrousel (){
	currentIndex = (currentIndex - 1)

if (currentIndex === -1) {currentIndex = slides.length -1}
setActiveDot (currentIndex) 
image.src = slides[currentIndex]["image"];
image.alt = slides[currentIndex]["alt"];
texte.innerHTML = slides[currentIndex]["tagLine"];

	console.log("clique gauche")
}

const flecheDroite = document.querySelector(".arrow_right");
	console.log(flecheDroite)

flecheDroite.addEventListener("click", clickDroiteCarrousel)

function clickDroiteCarrousel (){
	currentIndex = (currentIndex + 1)

if (currentIndex >= slides.length) {currentIndex = 0}
setActiveDot (currentIndex)
image.src = slides[currentIndex]["image"];
image.alt = slides[currentIndex]["alt"];
texte.innerHTML = slides[currentIndex]["tagLine"];

	console.log("clique droit")
}