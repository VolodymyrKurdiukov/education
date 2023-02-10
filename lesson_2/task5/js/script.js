const lenghtSm = 10;
let lenghtM = lenghtSm / 100;
let lenghtKm = lenghtM / 1000;

document.write(`
			<table>
				<tr>
					<td>
						Довжина в СМ
					</td>
					<td>
						Довжина в М
					</td>
					<td>
						Довжина в КМ
					</td>
				</tr>
				<tr>
					<td>
						${lenghtSm}
					</td>
					<td>
						${lenghtM}
					</td>
					<td>
						${lenghtKm}
					</td>
				</tr>
			</table>
`);