import React from 'react'
import "./styles.css"

interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>
}
///Reusable todo interfaceから

const InputField = ({todo,setTodo}:Props) => {
  return (
    <form className="input">
<input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Enter your task" className="input_box"/>
<button className="input_submit" type="submit">GO</button>
    </form>
  )
}

export default InputField