"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function getRandomInt() {
    return Math.floor(Math.random() * 100) + 1;
}
var lePrix = getRandomInt();
var essaisRestants = 10;
// Initialisation de l'interface readline
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Je pose la question à l'utilisateur et récupère sa réponse
function laQuestion() {
    if (essaisRestants === 0) {
        console.log("\uD83E\uDD7A Perdu ! Le bon chiffre \u00E9tait ".concat(lePrix, "."));
        rl.close();
        return;
    }
    rl.question("\uD83E\uDD13 Entre un chiffre (il te reste ".concat(essaisRestants, " tentative").concat(essaisRestants > 1 ? 's' : '', "): "), function (answer) {
        var nombreJoueur = parseInt(answer, 10);
        // Je compare sa réponse au nombre donné par ma fonction "getRandomInt"
        if (isNaN(nombreJoueur)) {
            console.log("Ceci n'est pas un nombre valide");
        }
        else if (nombreJoueur > lePrix) {
            console.log("👇 Trop haut");
        }
        else if (nombreJoueur < lePrix) {
            console.log("👆 Trop bas");
        }
        else {
            console.log("💥 Bravo !");
            rejouer();
            return;
        }
        essaisRestants--;
        laQuestion();
    });
}
function rejouer() {
    rl.question("🔁 Veux-tu rejouer ? (oui/non) : ", function (reponse) {
        if (reponse.trim().toLowerCase() === "oui") {
            demarrerPartie();
        }
        else {
            console.log("👋 Merci d'avoir joué !");
            rl.close();
        }
    });
}
function demarrerPartie() {
    lePrix = getRandomInt();
    essaisRestants = 10;
    console.log("😁 Devine le nombre entre 1 et 100 !");
    laQuestion();
}
// C'est la ligne qui lance le jeu
demarrerPartie();
