const sceltaCPU = document.querySelector(".scelta-cpu");
const scelteUtente = document.querySelectorAll(".scelta");
const messaggio = document.querySelector(".messaggio");
const giocaDiNuovo = document.querySelector(".gioca-di-nuovo");

scelteUtente.forEach(scelta => {
    scelta.addEventListener("click", function(evento) {
        const sceltaUtente = evento.target.dataset.scelta;
        const sceltePossibili = ["carta", "forbice", "sasso"];
        const mossaCPU = sceltePossibili[generaNumeroRandomico(0, sceltePossibili.length - 1)];
        
        switch(mossaCPU) {
            case "carta":
                sceltaCPU.innerText = "🤚";
                break;
            case "forbice":
                sceltaCPU.innerText = "✌️";
                break;
            case "sasso":
                sceltaCPU.innerText = "👊";
                break;
        }
        determinaVittoria(sceltaUtente, mossaCPU);

        giocaDiNuovo.style.display = "block";
        scelteUtente.forEach(scelta => {
            scelta.disabled = "disabled"
        }) 
})
    });



function generaNumeroRandomico(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function determinaVittoria(mossaUtente, mossaCPU) {
    if((mossaUtente === "carta" && mossaCPU === "sasso")  || (mossaUtente === "forbice" && mossaCPU === "carta") || (mossaUtente === "sasso" && mossaCPU === "forbice")) {
        messaggio.innerText = "Hai vinto!🎉"
    } else if((mossaUtente === "sasso" && mossaCPU === "carta") || (mossaUtente === "carta" && mossaCPU === "forbice") || (mossaUtente === "forbice" && mossaCPU === "sasso")) {
        messaggio.innerText = "Hai perso!😢"
    } else {
        messaggio.innerText = "Pareggio!🤷"
    }
}

/*
    La partita è terminata e l'utente vuole giocare ancora e per farlo deve cliccare sul pulsante "Gioca di nuovo" già presente in html.

    Le tue task:
    1. Recupera il bottone in JS usando querySelector
    2. Setta un event listener al bottone "gioca di nuovo" con una callback function che tolga il testo del paragrafo con classe "messaggio" e dal div dove viene visualizzata la giocata della CPU.
    3. Aggiungere alla funzione "giocataCPU" la logica per poter mostrare il pulsante nascosto via CSS
    4. Una volta cliccato il pulsante gioca di nuovo, il pulsante deve sparire nuovamente
    5. Quando la partita è terminata l'utente non può più cliccare sulle mosse possibili. Potrà farlo solo se clicca il pulsante "gioca di nuovo".
*/

giocaDiNuovo.addEventListener("click", function(event) {
        messaggio.innerText = "";
        sceltaCPU.innerText = "";
        giocaDiNuovo.style.display = "none";
        scelteUtente.forEach(scelta => {
            scelta.removeAttribute("disabled");
        }) 
})