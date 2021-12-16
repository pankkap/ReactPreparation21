function mySimpleFunction(name) {
  return ("1. I i am your Trainer and my name is " + name);
}

let result = mySimpleFunction("pankaj");
console.log(result);

var newFun = function () {
  return "2. this is another way of defining function";
};

result = newFun();
console.log(result);
