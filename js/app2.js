let myArr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
document.write("<p>" + myArr + "</p>");
let arrPositiv = [];
for (let index = 0; index < myArr.length; index++) {
  let element = myArr[index];
  if (element > 0) {
    arrPositiv.push(element);
  }
}
let arrPositivCount = arrPositiv.length;
let arrPositivSum = 0;
for (let index = 0; index < arrPositiv.length; index++) {
  arrPositivSum = arrPositivSum + arrPositiv[index];
}
document.write("<p> positiv arr count is " + arrPositivCount + "</p>");
document.write("positiv sum of arr is " + arrPositivSum);
let minIndex = 0;
for (let index = 0; index < myArr.length; index++) {
  let element = myArr[index];
  if (myArr[minIndex] > element) {
    minIndex = index;
  }
}
document.write(
  "<p>min index of min element is " +
    minIndex +
    "</p>" +
    "<p> min element is " +
    myArr[minIndex] +
    "</p>"
);
let maxIndex = 0;
for (let index = 0; index < myArr.length; index++) {
  let element = myArr[index];
  if (myArr[maxIndex] < element) {
    maxIndex = index;
  }
}
document.write(
  "<p>max index of max element is " +
    maxIndex +
    "</p>" +
    "<p> max element is " +
    myArr[maxIndex] +
    "</p>"
);
let arrNegativ = [];
for (let index = 0; index < myArr.length; index++) {
  let element = myArr[index];
  if (element < 0) {
    arrNegativ.push(element);
  }
}
let arrNegativCount = arrNegativ.length;
document.write("<p> negativ arr count is " + arrNegativCount + "</p>");
let arrPositivCountOdd = 0;
let arrPositivCountEven = 0;
let arrPositivSumOdd = 0;
let arrPositivSumEven = 0;
for (let index = 0; index < arrPositiv.length; index++) {
  if (!(arrPositiv[index] % 2 === 0)) {
    arrPositivCountOdd++;
    arrPositivSumOdd = arrPositivSumOdd + arrPositiv[index];
  } else {
    arrPositivCountEven++;
    arrPositivSumEven = arrPositivSumEven + arrPositiv[index];
  }
}
document.write(
  "<p> count of positiv arr odd is " + arrPositivCountOdd + "</p>"
);
document.write(
  "<p> count of positiv arr even is " + arrPositivCountEven + "</p>"
);
document.write("<p> sum of positiv arr even is " + arrPositivSumEven + "</p>");
document.write("<p> sum of positiv arr odd is " + arrPositivSumOdd + "</p>");
let arrPositivMult = 1;
for (let index = 0; index < arrPositiv.length; index++) {
  arrPositivMult = arrPositivMult * arrPositiv[index];
}
document.write(
  "<p> multiplication of arr positiv is " + arrPositivMult + "</p>"
);
for (let index = 0; index < myArr.length; index++) {
  if (index !== maxIndex) {
    myArr[index] = 0;
  }
}
document.write(myArr);
