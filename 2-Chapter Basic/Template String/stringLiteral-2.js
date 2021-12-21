let firstName = "Pankaj";
let lastName = "Kapoor";

function sayHello(fname, lname) {
  return `${fname} ${lname}`;
}
// Even we can use Template string for calling Function
let hello = `${sayHello(firstName, lastName)}`;
console.log(hello);
