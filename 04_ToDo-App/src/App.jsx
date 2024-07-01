import { useEffect, useState } from 'react'
import './App.css'
import { TodoData } from './TodoData'

function App() {

  const [data, setData] = useState([])
  const [task, setTask] = useState('')
  const [id, setID] = useState(0)
  const [update, setUpdate] = useState(false)

  useEffect(()=>{
    setData(TodoData)
  },[])

 const handleEdit = (id) =>{
  let isUpdate = true
  setUpdate(isUpdate) 
  const dt = data.filter(item => item.id === id)
  if(dt !== undefined){
    setTask(dt[0].task)
  }
 }

 const handleDelete = (id)=>{
  if(id>0){
    if(window.confirm("Are you sure?")){
      const dt = data.filter(item => item.id !== id)
      console.log(dt);
      setData(dt)
    }
  }
 }

 const handleSave =(e) =>{
  let isUpdate = false
  setUpdate(isUpdate) 
  e.preventDefault()
  const dt = [...data]
  const newDt = {
    id: data.length + 1,
    task: task
  }

  dt.push(newDt)
  setData(dt)
  handleClear()
 }

 const handleUpdate =() =>{
  const index = data.map((item)=>{
    return item.id
  }).indexOf(id)

  const dt = [...data]
  dt[index].task = task

  setData(dt)
  handleClear()

 }

 const handleClear =() =>{
  let isUpdate = false
  setUpdate(isUpdate) 
  setID('')
  setTask('')
 }


  return (
    <>
    <div style={{display:"flex",  justifyContent:"center", margin:"15px"}}>
      <div>
        <input 
        style={{height:"45px",width:"1000px"}}
          type='text'
          placeholder='Enter task'
          value={task}
          onChange={(e)=> setTask(e.target.value)}
        />
      </div>
      <div>&nbsp;

      {
        update === false? 
        <button className='btn btn-primary' onClick={(e)=>handleSave(e)}>Save</button>
        :
        <button className='btn btn-primary' onClick={()=>handleUpdate()}>Update</button>
      }&nbsp;
        <button className='btn btn-danger' onClick={()=>handleClear()}>Clear</button>
      </div>
    </div>
      <table className='table table-bordered table-dark'>
        <thead>
          <tr>
            <td>Sr. No</td>
            <td>ID</td>
            <td>Tasks</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {
            data.map((item, index)=>{
              return(
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.task}</td>
                  <td>
                    <button className='btn btn-primary' onClick={()=> handleEdit(item.id)}>Edit</button>&nbsp;&nbsp;
                    <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App
