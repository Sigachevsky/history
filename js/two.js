function checkPassword() {
  var password = document.getElementById('passwordInput').value;
  var errorMessage = document.getElementById('error-message');

  // Предположим, что правильный пароль - "секрет123"
  if (password === 'Q7I%DIANA') {
    window.location = 'QR.html'; // Перенаправление на другую страницу
  } else {
    errorMessage.textContent = 'Пароль неверен!'; // Устанавливаем сообщение об ошибке
  }
}