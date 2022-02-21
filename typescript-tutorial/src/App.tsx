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


type Person={
  name:string
  age?:number
}
let person:Person={
  name:"yoshino",
  age:25
};

let lotOfPerson:Person[];



function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
