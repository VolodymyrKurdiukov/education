let randomNumber = Math.floor(Math.random() * 5) + 1
let userNumber = parseInt(prompt('Введіть число', ''))
const answerCorrect = 'Ви вгадали число'
const answerInCorrect = 'Ви не вгадали число'

let result;

if (userNumber == randomNumber)
	result = answerCorrect
else {
	userNumber = parseInt(prompt(`${answerInCorrect} Введіть число, друга спроба`, ''))
	if (userNumber == randomNumber)
		result = answerCorrect
	else
		result = answerInCorrect
}



document.write(`
			<h2>Умова</h2>
			<p>Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби..</p>
			<h3>${result}</h3>
			<h2>Випадкове число: ${randomNumber}</h2>
			
`);
