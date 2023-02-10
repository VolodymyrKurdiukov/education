let a = parseFloat(prompt('Введіть число а', ''));
let b = parseFloat(prompt('Введіть число b', ''));
let c = parseFloat(prompt('Введіть число c', ''));
let squareOne = a + 12 + b;

let summ = a + b;
let multiplicationDenominator = 2 * a;
let division = summ / multiplicationDenominator;
let squareTwo = Math.sqrt(division);

let multiplication = summ * c;
let squareThree = Math.cbrt(multiplication);

let divisionFour = a / - b;
let squareFour = Math.sin(divisionFour);

document.write(`
			<table>
				<tr>
					<td>
						S1 = ${squareOne}
					</td>
				</tr>
				<tr>
					<td>
						S2 = ${squareTwo}
					</td>
				</tr>
				<tr>
					<td>
						S3 = ${squareThree}
					</td>
				</tr>
				<tr>
					<td>
						S4 = ${squareFour}
					</td>
				</tr>
			</table>
`);


