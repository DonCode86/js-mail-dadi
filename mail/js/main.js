const enabledMails = ["d.ciccarelli86@gmail.com","f.brandozzi@gmail.com","m.rossi@gmail.com"];
const userMail = prompt("Per accedere inserisci la tua mail");

for (let i = 0; i < enabledMails.length; i++) {
    if (userMail === enabledMails[i]) {
        console.log("benvenuto")
    }
    else {
        console.log("spiacente, l'email inserita non e' abilitata all'acceso.")
    }
}

// console.log(enabledMails.length);