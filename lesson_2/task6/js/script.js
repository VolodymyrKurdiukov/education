let secondsPassed = parseInt(prompt('Скільки секунд пройшло від початку доби?',''));
let hourInSeconds = 60 * 60;
let minute = 60;

let hours = Math.floor(secondsPassed / hourInSeconds);
let minutes = Math.floor((secondsPassed % hourInSeconds) / minute);

document.write(`
		Від початку доби пройшло ${secondsPassed} секунд, це ${hours} годин(а) та ${minutes} хвилин(а) 
`);


