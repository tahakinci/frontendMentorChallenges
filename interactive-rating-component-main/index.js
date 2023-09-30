let card = document.querySelector(".score-box");
let cardBtn = document.querySelector(".submit-button");
let cardNums = document
  .querySelector(".score-container")
  .querySelectorAll("button");
let selectNum = document.querySelector(".selected-score");
let num = "";

cardNums.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    cardNums.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    num = btn.innerHTML;
  });
});
cardBtn.addEventListener("click", () => {
  card.classList.toggle("active");
  selectNum.innerHTML = num;
});
