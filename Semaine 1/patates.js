// Question posée
var question = prompt("Hey mon ami ! Tu aimes ça les patates ?")

// Interprétation de la réponse (|| = conjonction OU)
if (question == "oui" || question == "OUI" || question == "o" || question == "O") {
	// Dans ce cas, afficher les patates dans la console
	for (var patate = 1; patate < 7; patate++) {
		// repeat() rajoute n fois la chaîne de caractères avant
		console.log("#".repeat(patate))
	}

} else if (question == "non" || question == "NON" || question == "n" || question == "N") {
	// Dans ce cas, afficher l'alerte de déception
	alert("Tu préfères les pommes de terre, c'est ça ?")
} else {
	// Autre réponse: afficher l'alerte "tiraillé"
	alert("Je te sens comme tiraillé...")
}