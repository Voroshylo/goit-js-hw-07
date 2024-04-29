// Отримуємо посилання на інпут і спан
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Прослуховуємо подію 'input'
nameInput.addEventListener('input', () => {
  // Отримуємо значення інпута, видаляючи пробіли по краях
  const trimmedValue = nameInput.value.trim();

  // Якщо інпут порожній або містить лише пробіли, підставляємо "Anonymous"
  if (trimmedValue === '') {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = trimmedValue;
  }
});