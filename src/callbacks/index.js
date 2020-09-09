//function A / function B/ nuestra function(function)
//En otras palabras un callback es una funcion que le dice a otra funcion " hey vete a trabajar y llamame ///cuando termines, estare esperando en la playa tomando piña colada"

function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(6, 2, sum));

function date(callback) {
  console.log(new Date());
  setTimeout(function () {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);
