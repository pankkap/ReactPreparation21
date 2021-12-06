var obj = {
  item1: "abc",
  item2: "xyz",
  item3: "pqr",
  item4: "stu",
};

// De-structuring
// The destructuring assignment allows you to locally scope fields within an object and to declare which values will be used.

var { item1, item3 } = obj;
console.log(item1, item3);

item1 = "new data";
item3 = "new data1";
console.log(item1, item3); // new data new data1

console.log(obj.item1, obj.item3); //abc  pqr
