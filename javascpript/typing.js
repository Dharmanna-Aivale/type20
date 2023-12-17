const inpField = document.getElementById("input-field");
const text = document.querySelector(".wrapper p");
const countdown = document.getElementById("countdown");
const wpmEl = document.getElementById("wpm-el");
const mistakesEl = document.getElementById("mistakes-el");
const accuracyEl = document.getElementById("accuracy-el");
const timeEl = document.getElementById("time-taken-el");
const nextTestBtn = document.getElementById("next-test");

let timer;
let charIndex = 0;
let time = 60;
let mistakes = 0;
let isTyping = false;


// the demo text
const lyrics = [
  "i have had a code or two and i dont care There no fun in what i code if it is not there i wonder what went wrong i have waited far too long i think i shall write some code and look for her though tonight the bugs make me sad i still debug them  if i find a fix i will be glad i still code them",
  "This morning I wrote the call. The one that ends it all. Closing up the brackets, I wanted to cry but dammit, this bug's gone dry. Not for the money, not for the fame. Not for the power, just no more blame. But now I'm safe in the eye of the IDE. I can't replace the lines, that let a thousand bugs go."
];


function randomLyrics() {
  let randIndex = Math.floor(Math.random() * lyrics.length);
  lyrics[randIndex].split("").forEach((char) => {
    let spanTag = `<span>${char}</span>`;
    text.innerHTML += spanTag;
  });

  let firstChar = text.querySelectorAll("span")[0];
  firstChar.classList.add("active");

  document.addEventListener("keydown", () => inpField.focus());
  text.addEventListener("click", () => inpField.focus());
}

function initTimer() {
  if (time > 0) {
    time--;
    countdown.innerText = time;
  } else {
    clearInterval(timer);
    showResults();
  }

  time < 10 ? (countdown.innerText = `0${time}`) : (countdown.innerText = time);
}

function showResults() {
  document.querySelector(".content").style.display = "none";
  document.querySelector(".results").classList.add("active");

  let wpm = Math.round(((charIndex - mistakes) / 5 / (60 - time)) * 60);
  let accuracy = Math.round(((charIndex - mistakes) / charIndex) * 100);

  wpmEl.innerText = wpm;
  mistakesEl.innerText = mistakes;
  accuracyEl.innerText = accuracy;
  timeEl.innerText = 60 - time;
}

function initTyping(e) {
  let characters = text.querySelectorAll("span");
  let charTyped = inpField.value.split("")[charIndex];

  if (charIndex < characters.length - 1 && time > 0) {
    if (!isTyping) {
      timer = setInterval(initTimer, 1000);
      isTyping = true;
    }

    if (charTyped == null) {
      charIndex--;
      characters[charIndex].classList.remove(
        "correct",
        "incorrect",
        "incorrect__space"
      );
    } else {
      if (characters[charIndex].innerHTML === charTyped) {
        characters[charIndex].classList.add("correct");
      } else {
        characters[charIndex].classList.add("incorrect");
        mistakes++;

        if (
          characters[charIndex].innerHTML === " " &&
          characters[charIndex].classList.contains("incorrect")
        ) {
          characters[charIndex].classList.add("incorrect__space");
        }
      }
      charIndex++;
    }
    characters.forEach((span) => span.classList.remove("active"));
    characters[charIndex].classList.add("active");
  } else {
    clearInterval(timer);
    showResults();
  }
}

function nextTest() {
  clearInterval(timer);
  charIndex = 0;
  mistakes = 0;
  time = 60;
  isTyping = false;
  text.innerHTML = "";
  inpField.value = "";
  randomLyrics();

  countdown.innerText = time;

  if (document.querySelector(".results").classList.contains("active")) {
    document.querySelector(".results").classList.remove("active");
    document.querySelector(".content").style.display = "block";
  }
}

randomLyrics();
inpField.addEventListener("input", initTyping);
nextTestBtn.addEventListener("click", nextTest);


// *****************************
function showResults() {
  document.querySelector(".content").style.display = "none";
  document.querySelector(".results").classList.add("active");

  let wpm = Math.round(((charIndex - mistakes) / 5 / (60 - time)) * 60);
  let accuracy = Math.round(((charIndex - mistakes) / charIndex) * 100);

  wpmEl.innerText = wpm;
  mistakesEl.innerText = mistakes;
  accuracyEl.innerText = accuracy;
  timeEl.innerText = 60 - time;

  // Check if WPM is 30 or more before showing the button
  if (wpm >=20) {
    document.getElementById("claim-certificate-btn").style.display = "block";
  } else {
    document.getElementById("claim-certificate-btn").style.display = "none";
  }
}

