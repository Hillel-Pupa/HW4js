let myArr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
document.write("<p>" + myArr + "</p>");

let arrPositivCount = 0;
let arrPositivSum = 0;
let minIndex = 0;
let maxIndex = 0;
let arrNegativCount = 0;
let arrPositivCountOdd = 0;
let arrPositivCountEven = 0;
let arrPositivSumOdd = 0;
let arrPositivSumEven = 0;
let arrPositivMult = 1;
let myArrOutput = [];
for (let index = 0; index < myArr.length; index++) {
  let element = myArr[index];
  // Найти сумму и количество положительных элементов.
  if (element > 0) {
    arrPositivCount++;
    arrPositivSum += element;
    // Найти произведение положительных элементов.
    arrPositivMult *= element;
    // Найти количество нечетных положительных элементов.
    // Найти сумму нечетных положительных элементов.
    if (!(element % 2 === 0)) {
      arrPositivCountOdd++;
      arrPositivSumOdd += element;
    } // Найти количество четных положительных элементов.
    // Найти сумму четных положительных элементов.
    else {
      arrPositivCountEven++;
      arrPositivSumEven += element;
    }
  }
  // Найти минимальный элемент массива и его порядковый номер.
  if (myArr[minIndex] > element) {
    minIndex = index;
  }
  // Найти максимальный элемент массива и его порядковый номер.
  if (myArr[maxIndex] < element) {
    maxIndex = index;
  }
  // Определить количество отрицательных элементов.
  if (element < 0) {
    arrNegativCount++;
  }
}
for (let index = 0; index < myArr.length; index++) {
  let element = myArr[index];
  // Найти наибольший среди элементов массива, остальные обнулить.
  if (index !== maxIndex) {
    myArrOutput.push(0);
  } else {
    myArrOutput.push(element);
  }
}

document.write(
  ` <p> positiv arr count is ${arrPositivCount} </p> 
    <p>positiv sum of arr is ${arrPositivSum} </p>
    <p> index of min element is ${minIndex} </p> 
    <p> min element is ${myArr[minIndex]} </p> 
    <p> index of max element is ${maxIndex} </p> 
    <p> max element is ${myArr[maxIndex]} </p> 
    <p> negativ arr count is ${arrNegativCount} </p> 
    <p> count of positiv arr odd is ${arrPositivCountOdd} </p> 
    <p> count of positiv arr even is ${arrPositivCountEven} </p> 
    <p> sum of positiv arr even is ${arrPositivSumEven} </p> 
    <p> sum of positiv arr odd is ${arrPositivSumOdd} </p> 
    <p> multiplication of arr positiv is ${arrPositivMult} </p> 
    <p> ${myArrOutput} </p>`
);
