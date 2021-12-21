// Example-1
let val1 = 6;
let val2 = 4;
function pure() {
  return val1 * val2;
}
let a = pure();
console.log(a)

//Example-2
function pure(arg) {
  let val = 100;
  return val * arg;
}
// console.log(pure(2));

//Example-3

function pure(arg) {
  return 4 * arg;
}
console.log(pure(2));
