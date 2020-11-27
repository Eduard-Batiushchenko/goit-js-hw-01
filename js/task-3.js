const ADMIN_PASSWORD = 'jqueryismyjam';
let userInput = prompt('Введите пароль!');
let message;

if (userInput === 'jqueryismyjam') {
  message = 'Добро пожаловать!';
  console.log(message);
} else if (userInput === null) {
  message = 'Отменено пользователем!';
  console.log(message);
} else {
  message = 'Доступ запрещен, неверный пароль!';
  console.log(message);
}

alert(message);
