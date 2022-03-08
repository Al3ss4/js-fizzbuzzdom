console.log('JS OK');


// MILESTONE 1

//Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


// MILESTONE 2
//Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

// MILESTONE 3
//Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.



const square = document.querySelector('.squares')

//creazione dei blocchi da 1  a 100

for (let i = 1; i <= 100; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.append(i);
    square.append(div);

    // MILESTONE 1

    if (i % 3 === 0) {
        div.classList.add("fizz");
        div.innerHTML = `fizz`;
    }

    // MILESTONE 2
    else if (i % 5 === 0) {
        div.classList.add("buzz");
        div.innerHTML = `buzz`;
    }
}