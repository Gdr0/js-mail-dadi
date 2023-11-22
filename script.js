// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// stilo una lisa delle mail
// const mailList = [
//   "jotaro@jmail.com",
//   "joseph@jmail.com",
//   "polnareff@jmail.com",
//   "kakyoin@jmail.com",
//   "abdul@jmail.com",
// ];

// const container = document.querySelector(".container");
// // creo l'evento per verificare la mail
// const ricerca = document.querySelector(".bottone-verifica");
// ricerca.addEventListener("click", function () {
//   // acquisisco la mail dell'utente
//   const userMail = document.querySelector(".mail-user");
//   let mail = userMail.value;
//   console.log(mail);

//   // controllo che la mial sia nella lista
//   if (mailList.includes(mail)) {
//     const verifica = `<h1> La tua mail è stata verificata!</h1>`;
//     container.innerHTML += verifica;

//     //   se presente stampo il messaggio di conferma
//     console.log(" La tua mail è stata verificata!");
//   } else {
//     // se non è presente informo l'utente
//     console.log("siamo spiacenti, non riusciamo a trovare la tua mail...");
//     const nonVer = `<h1>siamo spiacenti, non riusciamo a trovare la tua mail...</h1>`;
//     container.innerHTML += nonVer;
//   }
// });

const mailList = [
  "jotaro@jmail.com",
  "joseph@jmail.com",
  "polnareff@jmail.com",
  "kakyoin@jmail.com",
  "abdul@jmail.com",
];
const container = document.querySelector(".container");
// creo l'evento per verificare la mail
const ricerca = document.querySelector(".bottone-verifica");
ricerca.addEventListener("click", function () {
  // acquisisco la mail dell'utente
  const userMail = document.querySelector(".mail-user");
  let mail = userMail.value;
  //   console.log(mail);
  //   verifico la mail
  for (let i = 0; i < mailList.length; i++) {
    let mailL1 = mailList[i];
    if (mailL1 === mail) {
      var presente = "ci sta ";
    }
  }
  //   condizioni per il messaggio di verifica
  if (presente === undefined) {
    const nonVer = `<h1>siamo spiacenti, non riusciamo a trovare la tua e-mail...</h1>`;
    container.innerHTML += nonVer;
  } else {
    const verifica = `<h1> E-mail verificata!</h1>`;
    container.innerHTML += verifica;
    console.log(presente);
  }
});
//
//
//
//
//
//
//
//
//
//
// dadi
// creo costante per container dadi
const containerDadi = document.querySelector(".container-dadi");
// creo comando per l'evento
const sfida = document.querySelector(".genera");
sfida.addEventListener("click", function () {
  // risultato computer
  computer = Math.floor(Math.random() * 6) + 1;
  console.log(computer);

  // risultato gioctore
  giocatore = Math.floor(Math.random() * 6) + 1;
  console.log(giocatore);
  // confronto i risultati e li stampo
  if (computer > giocatore) {
    console.log("computer ha vinto!");
    const pcWin = `<h1> Computer ha vinto!</h1>`;
    containerDadi.innerHTML += pcWin;
  } else if (computer < giocatore) {
    console.log("giocatore ha vinto!");
    const humanWin = `<h1> Giocatore ha vinto!</h1>`;
    containerDadi.innerHTML += humanWin;
  } else if ((computer = giocatore)) {
    console.log("Pareggio!");
    const pari = `<h1> Pareggio!</h1>`;
    containerDadi.innerHTML += pari;
  }
});
