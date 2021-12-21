let input = " JAVASCRIPT ";
let output = "<div>" + input.trim() + "</div>";
console.log(output);

const trim = (str) => str.trim();
// const wrapDiv = (str) => "<div>" + str + "</div>";
const wrapDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

const result = wrapDiv(toLowerCase(trim(input)));
console.log(result);
