//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 arasinda rastgele bir sayi tut.

const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//? Variables
let score = 10;
let topScore = 0;

//* CheckBtn basildiginda kontrolleri yap
document.querySelector(".check-btn").addEventListener("click", () =>{
    const guessInput = Number(document.querySelector(".guess-input").value);
    const msg = document.querySelector(".msg")
    const body = document.querySelector("body");
    //? eger input girilmediyse kullaniciya uyari ver

    if (!guessInput) {
        msg.innerText = "Please enter a Number";
        //! eger rastgele == input.value
    } else if (randomNumber === guessInput) {
        msg.innerHTML = `Congrats You Win <i class="fa-solid fa-face-grin-hearts"></i>` ;
        // document.querySelector("body").style.background = "green";
        body.className = "bg-success"

        if (score > topScore) {
            topScore = score;
            document.querySelector(".top-score").textContent = topScore
        }

        document.querySelector(".secret-number").textContent = randomNumber
    }else {
        score--;
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
