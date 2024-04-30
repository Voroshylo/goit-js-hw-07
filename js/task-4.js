document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.login-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // предотвращаем перезагрузку страницы при сабмите

    const formElements = form.elements; // получаем элементы формы
    const email = formElements.email.value.trim(); // получение значения из поля Email
    const password = formElements.password.value.trim(); // получение значения из поля Password

    if (email === '' || password === '') {
      // если есть незаполненные поля, показываем alert
      alert('All form fields must be filled in');
    } else {
      // создаем объект с данными формы
      const formData = {
        email: email,
        password: password,
      };

      console.log(formData); // выводим объект в консоль

      form.reset(); // очищаем форму
    }
  });
});