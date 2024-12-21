console.log('JS #2. Домашнє завдання. Від простих до складних обчислень і рядків')

/*
 * #1
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */
let i = 5

console.log(++i);
console.log(i++);
console.log(i);

console.log(--i);
console.log(i--);
console.log(i);

// i


/*
 * #2
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */
var myNum = 10
var myTest = 20

myTest += myNum;
console.log("Після +=:", myTest);

myTest -= myNum;
console.log("Після -=:", myTest);

myTest *= myNum;
console.log("Після *=:", myTest); 

myTest /= myNum;
console.log("Після /=:", myTest); 

myTest %= myNum;
console.log("Після %=:", myTest); 


/*
 * #3
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

var myPi = Math.PI;
console.log("myPi:", myPi); 
var myRound = Math.round(89.279);
console.log("myRound:", myRound);
var myRandom = Math.random() * 10; 
console.log("myRandom:", myRandom);
var myPow = Math.pow(3, 5); // 3^5
console.log("myPow:", myPow);


/*
 * #4
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

// Мама мыла раму, рама мыла маму
// strObj
var strObj = {
    str: "Мама мыла раму, рама мыла маму", 
    length: "Мама мыла раму, рама мыла маму".length 
  };
  console.log(strObj);

/*
 * #5
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.4), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */
var strObj = {
    str: "Мама мыла раму, рама мыла маму",
    length: "Мама мыла раму, рама мыла маму".length
  };
  
var isRamaPos = strObj.str.indexOf("рама");
console.log("isRamaPos:", isRamaPos);
var isRama = isRamaPos !== -1;
console.log("isRama:", isRama);
// isRamaPos
// isRama


/*
 * #6
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.4), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */
var strObj = {
    str: "Мама мыла раму, рама мыла маму",
    length: "Мама мыла раму, рама мыла маму".length
  };
  var strReplace = strObj.str
  .replace("мыла", "моет") 
  .replace("рама", "Рама") 
  .replace("мыла", "держит");
  console.log("strReplace:", strReplace);
// strReplace


/*
 * #7
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */
var someStr = 'some STRING';
var upperStr = someStr.toUpperCase();
console.log("upperStr:", upperStr); 
var lowerStr = someStr.toLowerCase();
console.log("lowerStr:", lowerStr);
// var someStr = 'some STRING'
// var upperStr
// var lowerStr
