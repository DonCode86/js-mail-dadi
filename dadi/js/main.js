const button = document.getElementById("btn");

button.addEventListener("click",
    function() {
        const userNumber = Math.floor(Math.random() * 6) + 1;
        console.log("Hai ottenuto il numero: " + userNumber)
        const computerNumber = Math.floor(Math.random() * 6) + 1;
        console.log("Il tuo avversario ha ottenuto il numero: " + computerNumber);

        if (userNumber > computerNumber) {
            console.log("Complimenti! Hai vinto!")
        } else if (userNumber < computerNumber) {
            console.log("Mi dispiace! Hai perso!")
        } else {
            console.log("Wow! Hai pareggiato!")
        }
    }

)