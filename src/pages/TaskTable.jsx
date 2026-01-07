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
    <table className='table'>
      <thead>
        <tr>
        <td>ID</td>
        <td>TASK TITLE</td>
        <td>TASK DESCRIPTION</td>
        <td>TASK STATUS</td>
        <td>TASK PRIORITY</td>
        <td>DUE DATE</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          {
          data.map((val,index)=>{
            return(
            <>
            <td>{val.id}</td>
            <td>{val.taskTitle}</td>
            <td>{val.taskDescription}</td>
            <td>{val.taskStatus}</td>
            <td>{val.priority}</td>
            <td>{val.dueDate}</td>
            <td onClick={(id)=>deleteData(val.id)}><i class="bi bi-trash3 text-danger fs-5"></i></td>
            <td> <Link to={`/taskgo/${val.id}`}><i class="bi bi-pencil-square fs-5"> </i></Link></td>
            
            </>
            )
          })
        }
        </tr>
      </tbody>
    </table>
  )
}

export default TaskTable