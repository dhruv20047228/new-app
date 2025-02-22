import React from 'react';
import  { TodoItem }  from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight:"100vh",
    margin:"40px auto",
  }
  return (
    <div className='container'>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length==0? "No Todos to Display" : 
      props.todos.map((todo)=>{
        return (
          <>
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          </>
        )
      })}
    </div>
  );
}

export default Todos;
