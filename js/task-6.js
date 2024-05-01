function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}
document.addEventListener('DOMContentLoaded', function() {
  const createButton = document.querySelector('button[data-create]');
  const destroyButton = document.querySelector('button[data-destroy]');
  const input = document.querySelector('#controls input');
  createButton.addEventListener('click', function() {
    const amount = parseInt(input.value, 10);

    if (!isNaN(amount) && amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    }
  });
  destroyButton.addEventListener('click', function() {
    destroyBoxes();
  });
});
