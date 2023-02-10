let productQuantityOne = parseInt(prompt('Введіть кількість товару #1', ''));
let productPriceOne = parseFloat(prompt('Введіть вартість товару #1', ''));
let productQuantityTwo = parseInt(prompt('Введіть кількість товару #2', ''));
let productPriceTwo = parseFloat(prompt('Введіть вартість товару #2', ''));
let productQuantityThree = parseInt(prompt('Введіть кількість товару #3', ''));
let productPriceThree = parseFloat(prompt('Введіть вартість товару #3', ''));


let totalOne = productQuantityOne * productPriceOne;
let totalTwo = productQuantityTwo * productPriceTwo;
let totalThree = productQuantityThree * productPriceThree;

let total = totalOne + totalTwo + totalThree;

document.write(`
			<table>
				<tr>
					<td>
						Найменування
					</td>
					<td>
						Кількість
					</td>
					<td>
						Ціна
					</td>
					<td>
						Сума
					</td>
				</tr>
				<tr>
					<td>
						Товар №1
					</td>
					<td>
						${productQuantityOne}
					</td>
					<td>
						${productPriceOne}
					</td>
					<td>
						${totalOne}
					</td>
				</tr>
				<tr>
					<td>
						Товар №2
					</td>
					<td>
						${productQuantityTwo}
					</td>
					<td>
						${productPriceTwo}
					</td>
					<td>
						${totalTwo}
					</td>
				</tr>
				<tr>
					<td>
						Товар №3
					</td>
					<td>
						${productQuantityThree}
					</td>
					<td>
						${productPriceThree}
					</td>
					<td>
						${totalThree}
					</td>
				</tr>
				<tr>
					<td>
						Всього
					</td>
					<td></td>
					<td></td>
					<td>
						${total}
					</td>
				</tr>
			</table>
`);