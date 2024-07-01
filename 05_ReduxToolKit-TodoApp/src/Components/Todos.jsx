import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

const Todos = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    
    let arr = [1,2,3,4,5,6,7,8,9]
    arr.reverse((e)=>e)
    console.log(arr);
  return (
    <div> 
    <div>
        <h1>HELLO</h1>
    </div>
        {
           todos.map((todo)=>{
            {todo.id}
            {todo.text}
           })
        }
        {/* {
            todos.map(()=>{

            })
        } */}
    </div>
  )
}

export default Todos