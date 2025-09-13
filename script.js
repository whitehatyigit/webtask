let guessNumber = getRandom(1, 100);
let inputValue = document.getElementById("input");
let message = document.getElementById("message-text");
let numberOfTries = document.getElementById("number-of-tries");
let denemeText = document.getElementById("number-of-attempts");
let remainingTries = 10;
let denemeSayisi = 0;
const maxInputValue = 100;
const minInputValue = 1;
const button1 = document.getElementById("btn");
const button2 = document.getElementById("btn2");

// Rastgele sayı çağırma fonksiyonu için
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function sifirla() {
  message.innerHTML="";
  guessNumber = getRandom(1, 100);
  remainingTries = 10;
  numberOfTries.innerHTML = 10;
  denemeSayisi = 0;
  denemeText.innerHTML = 0;
  button1.disabled = false;
  inputValue.disabled = false;
}

button2.addEventListener("click", sifirla);
button1.addEventListener("click", guessTheNumber);

function guessTheNumber() {
  if (inputValue.value === "" || inputValue.value === null) {
    message.innerHTML = "Lütfen bir tam sayı değer giriniz.";
    return;
  }

  let userGuess = parseInt(inputValue.value);

  if (isNaN(userGuess)) {
    message.innerHTML = "Lütfen geçerli bir tam sayı giriniz.";
    inputValue.value = "";
    return;
  }
  //eğer kullanıcı çok zeki çıkıp virgüllü sayı girerse sayıyı yuvarlar
  if (!Number.isInteger(userGuess)) {
    userGuess = Math.round(userGuess); // Değeri düzelt
    message.innerHTML = "Tam sayı dedim.";
    return;
  }
  remainingTries--;
  denemeSayisi++;
  numberOfTries.innerHTML = remainingTries;
  denemeText.innerHTML = denemeSayisi;
  

  if (userGuess < minInputValue || userGuess > maxInputValue)
    message.innerHTML = "Lütfen 1 ile 100 arasında bir değer giriniz.";
  else if (userGuess < guessNumber)
    message.innerHTML = "Daha büyük bir değer deneyin.";
  else if (userGuess > guessNumber)
    message.innerHTML = "Daha küçük bir değer deneyin.";
  else if (userGuess === guessNumber) {
    message.innerHTML = "Tebrikler, doğru bildiniz.";
    button1.disabled = true;
  }

  
  if (remainingTries === 0 && userGuess != guessNumber) {
    message.innerHTML =
      "Deneme hakkınız bitti. Doğru sayı " + guessNumber + " idi";
    button1.disabled = true;
    inputValue.disabled = true;
  }
}
