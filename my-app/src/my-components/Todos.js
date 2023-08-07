import React from 'react'
import { TodosItems } from './TodosItems'

export const Todos = (props) => {
  let myStyle={
    minHeight:"70vh",
  }
  return (
    
   <div className="container" style={myStyle}>
    <h3 className="text-center">Todos list!!</h3>
    {props.todos.length===0 ? "No Data to display":
    props.todos.map((todo)=>{
        return <TodosItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
    })
    
    }
    
    
   </div>
   
  )
}
