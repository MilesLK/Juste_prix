import * as readline from 'readline';

function getRandomInt() {
    return Math.floor(Math.random() * 100) +1;
}

let lePrix = getRandomInt();
let essaisRestants = 10;

// Initialisation de l'interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Je pose la question à l'utilisateur et récupère sa réponse
function laQuestion() {
    if (essaisRestants === 0) {
        console.log(`🥺 Perdu ! Le bon chiffre était ${lePrix}.`);
        rl.close();
        return;
    }

    rl.question(`🤓 Entre un chiffre (il te reste ${essaisRestants} tentative${essaisRestants > 1 ? 's' : ''}): `, function(answer) {
        const nombreJoueur = parseInt(answer, 10);

// Je compare sa réponse au nombre donné par ma fonction "getRandomInt"
    if (isNaN(nombreJoueur)) {
        console.log("Ceci n'est pas un nombre valide");       
    } else if (nombreJoueur > lePrix) {
        console.log("👇 Trop haut");
    } else if (nombreJoueur < lePrix) {
        console.log("👆 Trop bas");        
    } else {
        console.log("💥 Bravo !");
        rejouer();
        return; 
    }
    essaisRestants--;
    laQuestion();
});
}

function rejouer() {
    rl.question("🔁 Veux-tu rejouer ? (oui/non) : ", (reponse) => {
        if (reponse.trim().toLowerCase() === "oui") {
            demarrerPartie();
        } else {
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
