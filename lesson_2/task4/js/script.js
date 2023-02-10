let productPrice = 120;
let productQuantity = 105;
let total = productPrice * productQuantity;
let tax = total * 5 / 100;
document.write(`
			<table>
				<tr>
					<td>
						Ціна товару
					</td>
					<td>
						Кількість товару
					</td>
					<td>
						Загальна вартість
					</td>
					<td>
						Податок 5%
					</td>
				</tr>
				<tr>
					<td>
						${productPrice}
					</td>
					<td>
						${productQuantity}
					</td>
					<td>
						${total}
					</td>
					<td>
						${tax}
					</td>
				</tr>
			</table>
`);