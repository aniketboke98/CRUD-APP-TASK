import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const TaskTable = () => {
const [data, setData] = useState([]);
  const getTableData =async()=>{
    try{
      const result = await axios.get('http://localhost:3000/tasks')
      console.log(result.data)
      setData(result.data)
    }catch(err){
      console.log(err)
    }
};

const deleteData = async(id)=>{
  try{
    const result = data.filter((val) => val.id !== id )
    setData(result)
    await axios.delete('http://localhost:3000/tasks/{id}')
  }catch(err){

  }
}

useEffect(()=>{
    getTableData();
},[])
console.log(data)
  return (
    <table className='table table-striped'>
      <thead>
        <tr>
        <th>ID</th>
        <th>TASK TITLE</th>
        <th>TASK DESCRIPTION</th>
        <th>TASK STATUS</th>
        <th>TASK PRIORITY</th>
        <th>DUE DATE</th>
        </tr>
      </thead>
      <tbody>
        
          {
          data.map((val,index)=>{
            
            return(
            <tr key={index}>
            <td>{val.id}</td>
            <td>{val.taskTitle}</td>
            <td>{val.taskDescription}</td>
            <td>{val.taskStatus}</td>
            <td>{val.priority}</td>
            <td>{val.dueDate}</td>
            <td onClick={(id)=>deleteData(val.id)}><i class="bi bi-trash3 text-danger fs-5"></i></td>
            <td> <Link to={`/taskgo/${val.id}`}><i class="bi bi-pencil-square fs-5"> </i></Link></td>
            
            </tr>
            )
            
          })
        }
        
      </tbody>
    </table>
  )
}

export default TaskTable