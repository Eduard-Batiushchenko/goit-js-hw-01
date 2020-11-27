let input = prompt('Введите страну доставки');
let price = 0;
input = input.toLowerCase();
const country = input;

switch (country) {
  case 'китай':
    price = 100;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case 'чили':
    price = 250;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case 'австралия':
    price = 170;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case 'индия':
    price = 80;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case 'ямайка':
    price = 120;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
