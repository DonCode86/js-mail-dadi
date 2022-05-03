const enabledMails = ["d.ciccarelli86@gmail.com","f.brandozzi@gmail.com","m.rossi@gmail.com"];
const userMail = prompt("Per accedere inserisci la tua mail");

for (let i = 0; i < enabledMails.length; i++) {
    console.log(enabledMails[i]);
    if (userMail === enabledMails[i]) {
        console.log("benvenuto")
    }
}

// console.log(enabledMails.length);