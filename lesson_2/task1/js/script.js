let a = parseFloat(prompt('Введіть число а', ''));
let b = parseFloat(prompt('Введіть число b', ''));
let summ = a + b;
let multiplication = a * b;
let division = a / b;

document.write(`
			<table>
				<tr>
					<td>
						Шукане значення
					</td>
					<td>
						Результат
					</td>
				</tr>
				<tr>
					<td>
						Сума
					</td>
					<td>
						${summ}
					</td>
				</tr>
				<tr>
					<td>	
						Добуток
					</td>
					<td>
						${multiplication}
					</td>
				</tr>
				<tr>
					<td>	
						Частка
					</td>
					<td>
						${division}
					</td>
				</tr>
			</table>
`);