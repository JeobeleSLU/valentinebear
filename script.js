const yes = document.getElementById("yes");
const no = document.getElementById("no");
const sadValentine = document.getElementById("valentineSad");
const askValentine = document.getElementById("askValentine");
const yesValentine = document.getElementById("yesValentine");
const askBear = document.getElementById("askingBear");
let noButtonSize = no.offsetWidth;
let yesButtonSize = yes.offsetWidth;
const threshold = 50;
let clickCounter = 0;

yes.addEventListener("click", () => {
  hideQuestionAndshowHappy();
});
no.addEventListener("click", () => {
  randomPostion();
  resizeButton();
  validateClicks();
});

function hideQuestionAndshowHappy() {
  askValentine.style.display = "none";
  yesValentine.style.display = "block";
}

function validateClicks() {
  if (clickCounter < 3) {
    clickCounter++;
    togglePicture();
    console.log("hello world");
    return;
  }
  toggleVisibility();
  console.log("hello world");
}
function togglePicture() {
  switch (clickCounter) {
    case 1:
      askBear.src = "https://media.tenor.com/Q9VuGIKQqEMAAAAi/love-bear.gif";
      break;
    case 2:
      askBear.src = "https://media.tenor.com/z7ZABFfLkn8AAAAi/kh%C3%B3c.gif";
      break;
    case 3:
      askBear.src =
        "https://media.tenor.com/uzTknCqPVBgAAAAi/tooji-bubududu.gif";
      break;
  }
}
function toggleVisibility() {
  sadValentine.style.display = "block";
  askValentine.style.display = "none";
}

function randomPostion() {
  no.style.position = "absolute";
  const minScreenX = window.screen.width / 5;
  const minScreenY = window.screen.height / 5;

  const maxScreenY = window.screen.height - threshold;
  const maxScreenX = window.screen.width - threshold;
  // delta of x and y
  const dx = getRandomInt(minScreenX, maxScreenX);
  const dy = getRandomInt(minScreenY, maxScreenY);

  no.style.left = dx + "px";
  no.style.top = dy + "px";
}
function resizeButton() {
  no.style.width = noButtonSize - 10 + "px";

  const newYesSize = Math.max(yesButtonSize + threshold, 20);

  yes.style.setProperty("width", newYesSize + "px", "important");
  yes.style.setProperty("height", newYesSize + "px", "important");

  console.log(no.style.width);
  console.log(yes.style.width);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
