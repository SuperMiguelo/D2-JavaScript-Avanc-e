// récupère un seul élément
var div = document.getElementById("intro");
console.log(div);

//tableau d'éléments
var paragraphes = document.getElementsByTagName("p");
console.log(paragraphes);

//tableau d'éléments 
var reds = document.getElementsByClassName("red");
console.log(reds);

var querySelector = document.querySelector("p");
console.log(querySelector);

var querySelectorAll = document.querySelectorAll(".red");
console.log(querySelectorAll);

var link = document.getElementById("lien");
link.href = "http://www.google.com";
link.style.background = "blue";

div.innerHTML += "<strong> on ajoute du texte en gras </strong>";

//crée un nouvel élément 
var para = document.createElement("p");
//ajout cet élément au div
div.appendChild(para);
//crée un nouvel élément de type texte
var texte = document.createTextNode("Nouveau text");
//ajout le texte au nouveau paragraphe
para.appendChild(texte);