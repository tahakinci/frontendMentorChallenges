const card = document.querySelector(".score-box");
const cardBtn = document.querySelector(".submit-button");
const cardNums = document
  .querySelector(".score-container")
  .querySelectorAll("button");
const submitBox = document.querySelector(".submit-box");
const selectNum = document.querySelector(".selected-score");
const num = "";

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
