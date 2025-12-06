const form = document.getElementById("calcForm");
const erreur = document.getElementById("erreur");
const resultat = document.getElementById("resultat");
const historiqueListe = document.getElementById("historique");

let historique = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let A = document.getElementById("nombreA").value;
    let B = document.getElementById("nombreB").value;
    let op = document.getElementById("operation").value;

    erreur.textContent = "";
    resultat.textContent = "";

    // Validation
    if (A === "" || B === "") {
        erreur.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    A = Number(A);
    B = Number(B);

    if (op === "/" && B === 0) {
        erreur.textContent = "Erreur : division par zéro interdite !";
        return;
    }

    // Calcul
    let res;
    switch (op) {
        case "+": res = A + B; break;
        case "-": res = A - B; break;
        case "*": res = A * B; break;
        case "/": res = A / B; break;
    }

    resultat.textContent = "Résultat : " + res;

    // Ajout à l'historique
    let ligne = `${A} ${op} ${B} = ${res}`;
    historique.push(ligne);

    afficherHistorique();
});

function afficherHistorique() {
    historiqueListe.innerHTML = "";
    historique.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        historiqueListe.appendChild(li);
    });
}
