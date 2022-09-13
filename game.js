//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 arasinda rastgele bir sayi tut.

const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//* CheckBtn basildiginda kontrolleri yap
document.querySelector(".check-btn").addEventListener("click", () =>{
    const guessInput = Number(document.querySelector(".guess-input").value);
    const msg = document.querySelector(".msg")
    //? eger input girilmediyse kullaniciya uyari ver

    if (!guessInput) {
        msg.innerText = "Please enter a Number";
        //! eger rastgele == input.value
    } else if (randomNumber === guessInput) {
        msg.innerText = "Congrats You Win";
    }
});




//! eger rastgele == input.value
//? tebrikler bildiniz
//? background = green
//? eger score > topScore
//?    topScore = Score
//? secret_number = gorunur


//! degilse
//? eger rastgele sayi < input.value
//? AZALT
//? degilse
//? ARTTIR
//! degilse
