let currentYear = 2023;
let yearOfBirth = parseInt(prompt('Введіть ваш рік народження', ''));
let yearsAtTheMoment = currentYear - yearOfBirth;

document.write(`
			Кількість років ${yearsAtTheMoment}
`);