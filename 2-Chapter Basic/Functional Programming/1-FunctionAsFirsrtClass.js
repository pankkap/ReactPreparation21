var number = 234;

// function as vaiable
var fun1 = function () {
  console.log("This is Function Expression");
};
fun1();

// function as array element
var arr = [
  1,
  // this is an anonymous Function
  function () {
    console.log("This is function in array as array element");
  },
];
arr[1]();

// function as Object Member

const onj = {
  num: 20,
  func3: function () {
    console.log("This is function as Object Member");
  },
};
onj.func3();

// self-Invoking function
console.log(
  5 +
    (function () {
      return 5;
    })()
);

// Function thats take function as Arguments
var addTwo = function (num, fn) {
  console.log(num + fn());
};
addTwo(10, function () {
  return 10;
});

// Function that return another function
const retNumber = function () {
  return 30;
};
const retFunction = function () {
  return retNumber;
};
let newFunction = retFunction();
console.log(newFunction());
