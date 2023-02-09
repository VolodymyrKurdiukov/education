//Дано ширину екрана та кількість елементів, які повинні бути відображені у рядку.Визначити ширину елементів, які повинні бути відображені у цьому рядку.
let screenWidth = parseFloat(prompt('Введіть ширину екрану', ''));
let numberOfElements = parseInt(prompt('Введіть кількість елементів', ''));
let elementsWidth = screenWidth / numberOfElements;

document.write(`Ширина кожного елемента ${elementsWidth} ` );

//З клавіатури вводиться розмір заробітної плати та розмір прожиткового мінімуму. Визначити розмір соціальної допомоги (ввжаємо, що заробітна плата є меншою).

let salary = parseFloat(prompt('Введіть розмір заробітної плати', ''));
let healthMinimum = parseFloat(prompt('Введіть розмір прожиткового мінімуму', ''));
let socialSupport = healthMinimum - salary;

document.write(`Cоціальна допомога складає ${socialSupport}`);

//З клавіатури вводяться вартість одиниці та кількість одиниць двох товарів. Вивести на екран вартість кожного з видів товарів окремо і загальну вартість.

let tablePrice = parseFloat(prompt('Введіть вартість столу', ''));
let chairPrice = parseFloat(prompt('Введіть вартість стільця', ''));
let tableQuantity = parseInt(prompt('Введіть кількість столів', ''));
let chairQuantity = parseInt(prompt('Введіть кількість стільців', ''));
let tablesTotal = tablePrice * tableQuantity;
let chairsTotal = chairPrice * chairQuantity;
let totalPrice = tablesTotal + chairsTotal;

document.write(`Вартість одного стільця складає ${chairPrice}`);
document.write(`Вартість одного стола складає ${tablePrice}`);
document.write(`Вартість всіх столів складає ${tablesTotal}`);
document.write(`Вартість всіх стільців складає ${chairsTotal}`);
document.write(`Вартість всіх виробів складає ${totalPrice}`);

//З клавіатури вводиться вік дитини. Вивести на екран через скільки років вона буде відвідувати садочок, піде у школу, закінчить школу, вступить і закінчить 

let childAge = parseInt(prompt('Введіть вік дитини', ''));
let kinderGarden = 3 - childAge;
let beginingSchool = 6 - childAge;
let endSchool = 16 - childAge;
let beginingUniversity = 16 - childAge;
let endUniversity = 22 - childAge;

document.write(`Вашій дитині: ${childAge} років, через ${kinderGarden} років вона піде в садочок, через ${beginingSchool} років вона піде в школу, 
					через ${endSchool} років вона закінчить школу, через ${beginingUniversity} років вона вступить до університету, 
					через ${endUniversity} років вона закінчить університет`);

