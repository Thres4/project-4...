"strict";
let secrectnumber = Math.trunc(Math.random() * 21);
//document.querySelector(".quest").textContent = secrectnumber;
let chkBtn = document.getElementById("chk");
let score = 20;
let highscore = 0;
document.querySelector(".quest").textContent = secrectnumber;

//if (chkBtn) {
//chkBtn.addEventListener("click", () => {
const displaymessage = function (message) {
  document.querySelector(".word").textContent = message;
};
document.querySelector("#chk").addEventListener("click", function () {
  console.log(document.querySelector(".in").value);
  const guess = Number(document.querySelector(".in").value);
  console.log(guess, typeof guess);
  if (guess != Number) {
    document.querySelector(".word").textContent = "not a valid input";
  } else if (guess < secrectnumber) {
    document.querySelector(".word").textContent =
      " Try again guessed number is to low";
  } else if (guess > secrectnumber) {
    document.querySelector(".word").textContent =
      "Try again guessed number is to high";
  } else if (guess === secrectnumber) {
    document.querySelector(".word").textContent = "Congrats you got the number";
    document.querySelector("body").style.backgroundColor = "rgb(30, 221, 148)";
  }
});
