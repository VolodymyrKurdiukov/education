const productPrice = prompt('Введіть ціну товару', '');
const totalCash = parseInt(prompt('Введіть кількість грошей', ''));
const restMoney = totalCash - productPrice;
let result;

if (productPrice > totalCash)
	result = 'Вибачте, у Вас недостатньо коштів'
else if (restMoney >= 4)
	result = 'Виможете купити товар та лотерею за 4 грн'
else
	result = 'Виможете купити товар'

document.write(`
			<h2>Умова</h2>
			<p>З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.</p>
			<h2>Результат</h2>
			<h3> ${result}</h3>
`);
