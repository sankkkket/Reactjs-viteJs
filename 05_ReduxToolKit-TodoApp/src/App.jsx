import { useState } from 'react'
import './App.css'
import AddTodos from './Components/AddTodos'
import Todos from './Components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Redux Toolkit</p>
      <AddTodos />
      <Todos />
    </>
  )
}

export default App
