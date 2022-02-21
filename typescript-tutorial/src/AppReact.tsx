import React, { useState } from 'react';
import './AppReact.css';
import InputField from './components/InputField'

const AppReact:React.FC=()=>{

const [todo, setTodo] = useState<string>('');

  return (
    <div className="AppReact">
    <span className="heading">
Todo List
    </span>
    <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}


export default AppReact;