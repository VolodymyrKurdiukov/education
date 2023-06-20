const boyName = prompt('Введіть імя хлопчика', '');
const girlName = prompt('Введіть імя дівчинки', '');
const boyCandies = parseInt(prompt('Введіть кількість цукерок у хлопчика', ''));
const girlCandies = parseInt(prompt('Введіть кількість цукерок у дівчинки', ''));

let result;

if (boyCandies > girlCandies)
	result = boyName
else if (boyCandies < girlCandies)
	result = girlName
else
	result = 'кількість однакова'

document.write(`
			<h2>Умова</h2>
			<p>З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова</p>
			<h2>Результат</h2>
			<h3> ${result}</h3>
`);
