import  React  from "react";
import TodoListItem from "./TodoListItem";


const arr=['Learn React','use JSX','Be a frontend dev']
const ToDoList=()=>{
  return(
    <>
    <ul>
      {
        arr.map((obj,idx)=>
        <TodoListItem text={obj}/>
        )
      }
   </ul>
    </>
  )
}
export default ToDoList