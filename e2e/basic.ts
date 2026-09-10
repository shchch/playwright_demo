// to run this .ts file use command npx ts-node basic.ts

export
let  username= "John Doe";
let a: number= 42;
let color:string[]=["red", "green", "blue"];
console.log(username);

let someArray= [1,2,3,4,5];
someArray.forEach((value)=>{
    console.log(value);
});


function printHello(): string {
   
  console.log('Hello!');
  return 'Hello!';
}