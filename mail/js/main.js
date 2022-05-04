const enabledMails = ["d.ciccarelli86@gmail.com", "f.brandozzi@gmail.com", "m.rossi@gmail.com"];
const userMail = prompt("Per accedere inserisci la tua mail");
let enabler = 0;

for (let i = 0; i < enabledMails.length; i++) {
    if (userMail === enabledMails[i]) {
        enabler = 1;
    }
}
if (enabler === 1) {
    console.log("Benvenuto!")
} else {
    console.log("spiacente, l'email inserita non e' abilitata all'accesso.");
}