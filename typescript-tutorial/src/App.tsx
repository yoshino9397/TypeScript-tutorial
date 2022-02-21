import React from 'react';
import './App.css';

let name:string ;
let age:number;
let isStudent:boolean;
let hobbies:string[];
let role:[number,string];


function printName(name:string){
  console.log(name);
}
printName('yoshino')


let printName2:(name:string) =>never;
let personName:unknown;
///It's better to use 'never' and 'unknown' than using 'void,any'.


// type Person={
//   name:string
//   age?:number
// }
interface Person{
  name:string
  age?:number
}
//'type' and 'interface' are almost same!
//but better to use 'interface',because⏬
interface Guy extends Person{
  profession:string
}


let person:Person={
  name:"yoshino",
  age:25
};

let lotOfPerson:Person[];


type X={
  a:string;
  b:number;
}
type Y=X&{
  c:string;
  d:number;
}



function App() {
  return (
    <div className="App">
      Hello World App
    </div>
  );
}

export default App;
