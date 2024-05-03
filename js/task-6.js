function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input[type]");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  const amount = +input.value;
  if (amount <= 100 && amount >= 1) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Between 1 and 100.");
  }
});

function createBoxes(amount) {
  boxes.innerHTML = "";
  const arrBoxes = [];
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    arrBoxes.push(
      `<div style='background-color: ${getRandomHexColor()}; width:${boxSize}px; height:${boxSize}px;'></div>`
    );
    boxSize += 10;
  }
  boxes.innerHTML = arrBoxes.join("");
}

btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
}