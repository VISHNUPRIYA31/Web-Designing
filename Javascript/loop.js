/* for ( .... ; .... ; ....)
{

}
while (condition) { --> Entry Controlled loop
}

do {

}while(condition);
*/
/*let i = 1;
while (i<=10)
{
    console.log("Java Script");
    i++;
}*/

for (let i =1;i<=5;i++)
    console.log("Java Script");


let i = 1;
 
do {
  console.log("Value:", i);
  i++;
} while (i <= 5);


let person = {
  name: "Alice",
  age: 25,
  job: "Designer"
};

 
for (let key in person) {
  console.log(key + ": " + person[key]);
}


let n = [10,20,30,40]

for (let k of n)
    console.log(k);


