// 1. Function as an Argument
function student() {
  return "student";
}
function teacher() {
  return "teacher";
}
function myFun(user) {
  console.log("Welcome " + user());
}
myFun(teacher);
myFun(student);

// 2. Function as return value
var greet = function () {
  return function () {
    console.log("Welcome to Everyone");
  };
};
greet()();

// Higher order Function
// Map Method

var Students = [
  { rollNo: 21, name: "Alpha" },
  { rollNo: 22, name: "Beta" },
  { rollNo: 23, name: "Gamma" },
  { rollNo: 24, name: "Delta" },
  { rollNo: 25, name: "Omega" },
];
// Use map() function
var StudentRollNo = Students.map(function (Student) {
  return Student.name;
});
// Display rollNo data
console.log(StudentRollNo);
