let startMounth = 1;
let endMounth = 12;
let startDay = 0;
let endDay = 6;

let randomMounth = startMounth + Math.floor(Math.random() * (endMounth - startMounth + 1));
let randomDay = startDay + Math.floor(Math.random() * (endDay - startDay + 1));

let summ = randomMounth + randomDay;


document.write(`
			Випадковий місяць ${randomMounth}, випадковий день ${randomDay}, та їх сума ${summ}
`);