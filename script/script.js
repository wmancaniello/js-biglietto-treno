// TEST
// alert('Test JS');

// DICHIARAZIONE

// Chiedo numero di km, che sarà una string
let numKm = prompt(
  "Benvenuto in TrainBOOL! Quanti Km dovrai percorrere?"
); //string
// Converto il dato fornito in number
numKm = parseFloat(numKm); //number
console.log(numKm, typeof numKm);

// Chiedo l'età del passeggero, che sarà una string
let age = prompt(
  "Perfetto, potresti indcarmi qual'è la tua età? Così da applicare, se possibile, eventuali sconti!"
); //string
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


// STAMPA
// Aggiungere .toFixed(2) per far si che prenda solo due decimali
document.getElementById("price").innerHTML = `${totalPrice.toFixed(2)} €`;