let total = 23580;
const pricePerDroid = 3000;
let input = prompt('Введите количество дроидов, которые вы хотите купить');

const totalPrice = input * pricePerDroid;

if (input === null) {
  console.log('Отменено пользователем!');
} else if (totalPrice <= total) {
  input = Number(input);
  total = total - totalPrice;
  console.log(
    `Вы купили ${input} дроидов, на счету осталось ${total} кредитов.`,
  );
} else if (input !== Number) {
  console.log('Введено не число');
} else {
  console.log('Недостаточно средств на счету!');
}
