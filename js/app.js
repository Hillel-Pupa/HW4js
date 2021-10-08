const arrRaw = prompt("enter your array like: 2,8,3,7,5,2,3,6", 0);
document.write("<p>" + arrRaw + "</p>");
let arr = arrRaw.split(",").map(function (item) {
  return parseInt(item);
});
let arrSort = arr.sort((a, b) => a - b);
document.write("<p>" + arrSort + "</p>");
arrSort.splice(1, 3);
document.write(arrSort);
