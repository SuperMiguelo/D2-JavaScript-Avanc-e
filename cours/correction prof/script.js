
function ucFirst(texte) {
    if(typeof texte === "string" && texte != "") {
        return texte.replace(texte[0], texte[0].toUpperCase());
    }

    return "Merci de mettre une string valide";
}

console.log(ucFirst("hello world"));

function capitalize(texte) {
    if(typeof texte === "string" && texte != "") {
        return texte
            .split(" ")
            .map(mot => ucFirst(mot))
            .join(" ");
    }

    return "Merci de mettre une string valide";
}

console.log(capitalize("hello world"));

function camelCase(texte) {
    if(typeof texte === "string" && texte != "") {
        return capitalize(texte)
            .split(" ")
            .join("");
    }

    return "Merci de mettre une string valide";
}

console.log(camelCase("hello world"));

function snakeCase(texte) {
    if(typeof texte === "string" && texte != "") {
        return texte.toLowerCase()
            .split(" ")
            .join("_");
    }

    return "Merci de mettre une string valide";
}

console.log(snakeCase("hello world"));

function cryptage(texte) {
    const trans = { a: "4", e: "3", i: "1", o: "0", u: "(_)", y: "7" }; 

    if(typeof texte === "string" && texte != "") {
        return texte.toLowerCase()
            .replace(/[aeiouy]/gi, y => trans[y]); 
    }

    return "Merci de mettre une string valide";
}

console.log(cryptage("anaconda"));

function findLongestWord(texte) {
    longest = "";

    if(typeof texte === "string" && texte != "") {
        texte.split(" ").forEach(mot => {
            if (mot.length > longest.length)
                longest = mot;
        });
        return (longest);        
    }

    return "Merci de mettre une string valide";
}

console.log(findLongestWord("Le chemin le plus cours n'est pas toujours le meilleur"));




