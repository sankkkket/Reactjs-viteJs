import React from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

const AddTodos = () => {

    const [input, setInput] = React.useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
        console.log(input);
        // console.log(setInput);
    };

  return (
    <div>
            <input 
                type="text"
                placeholder='Enter Todo'
                value={input}
                onChange={(e)=> setInput(e.target.value)}
            />
            <button onClick={addTodoHandler}>
                Add Todo
            </button>
    </div>
  )
}

export default AddTodos