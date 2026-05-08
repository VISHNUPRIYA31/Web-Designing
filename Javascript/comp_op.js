let x = 10;
let y = "10";

/*== --> automatically converts 
different datatypes into a common type before comparison 
using a mechanism called type coercion.*/

console.log("x == y :", x == y); // True --> Value is same 
console.log("true == 1 :",true == 1);
console.log("\"\" == 0 :","" == 0);

console.log("x === y :", x === y); // False --> Does not convert, Checks for both value & datatype

console.log("x != y :", x != y);
console.log("x !== y :", x !== y);

console.log("x > y :", x > y);
console.log("x < y :", x < y);

console.log("x >= y :", x >= y);
console.log("x <= y :", x <= y);