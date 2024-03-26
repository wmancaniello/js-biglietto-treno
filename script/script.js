// TEST
// alert('Test JS');

// DICHIARAZIONE

// Chiedo numero di km, che sarà una string
let numKm = prompt(
  "Benvenuto in TrainBOOL! Quanti Km dovrai percorrere?"
); //string | null
// Converto il dato fornito in number
numKm = parseFloat(numKm); //number
console.log(numKm, typeof numKm);

// Chiedo l'età del passeggero, che sarà una string
let age = prompt(
  "Perfetto, potresti indcarmi qual'è la tua età? Così da applicare, se possibile, eventuali sconti!"
); //string | null
// Converto il dato fornito in number
age = parseInt(age); //number
console.log(age, typeof age);

// Prezzo per KM
let priceKm = 0.21; //number
console.log(priceKm, typeof priceKm);

//LOGICA

// Calcolo del prezzo totale del biglietto
let totalPrice = numKm * priceKm; //number
// Verifico la correttezza dell'operazione
console.log(totalPrice, typeof totalPrice);

// Applicazione dello sconto
if (age < 18) {
  //sconto del 20%
  totalPrice = totalPrice * 0.8;
} else if (age >= 65) {
    totalPrice = totalPrice * 0.6;
}
console.log(totalPrice, typeof totalPrice);

// Altra modalità di applicazione sconto

// let discount;
// if (age < 18) {
//   discount = 20;
// } else if (age > 65) {
//   discount = 40;
// } else {
//   discount = 0;
// }

// console.log('discount in %', discount );
// const totalDiscount = totalPrice * discount / 100;
// console.log('discount in euro', totalDiscount);

// const finalPrice = totalPrice - totalDiscount
// console.log('prezzo finale', finalPrice);

// OUTPUT
// const resultMessage = `
//   <dl>
//     <dt>Prezzo base:</dt>
//     <dd>€ ${totalPrice.toFixed(2) /* string */}</dd>

//     <dt>Sconto:</dt>
//     <dd>${discounr /* number */} % (€ ${totalDiscount.toFixed(2)})</dd>

//     <dt>Prezzo finale</dt>
//     <dd>€ ${fianl.price.toFixed(2) /* string */}</dd>
//   </dl>
// `;
// Stampa
// ???
// Altra modalità di applicazione sconto


// STAMPA
// Aggiungere .toFixed(2) per far si che prenda solo due decimali
document.getElementById("price").innerHTML = `${totalPrice.toFixed(2)} €`;