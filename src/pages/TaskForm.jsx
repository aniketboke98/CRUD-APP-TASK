import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const TaskForm = () => {
  const {id} = useParams();
  const [data, setData] = useState({taskTitle:'',taskDescription:'', taskStatus:'',priority:'', dueDate:''})
  const getTableData = async(e)=>{
    try{
      const result = await axios.get(`http://localhost:3000/tasks/${id}`)
      
      setData({
        taskTitle:result.data.taskTitle,
        taskDescription:result.data.taskDescription, 
        taskStatus:result.data.taskStatus,
        priority:result.data.priority, 
        dueDate: result.data.dueDate
      })
    }catch(err){
    }
  }

  const updateHandler=async(e)=>{
    setData({...data,[e.target.id]: e.target.value})
  }
  const submitHamdler=async(e)=>{
      e.preventDefault();
      try{
        await axios.patch(`http://localhost:3000/tasks/${id}`,data)
      }catch(err){

      }
  }
  useEffect(()=>{
    getTableData()
  },[])

  return (
    <>
    <form onSubmit={(e) => submitHamdler(e)} className="container mt-5">
  <div className="card shadow p-4">
    <h4 className="mb-4 text-center">Add Task</h4>

    <div className="mb-3">
      <label className="form-label">Title</label>
      <input
        type="text"
        id="title"
        className="form-control"
        value={data.taskTitle}
        onChange={(e) => updateHandler(e)}
        placeholder="Enter task title"
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Description</label>
      <input
        type="text"
        id="description"
        className="form-control"
        value={data.taskDescription}
        onChange={(e) => updateHandler(e)}
        placeholder="Enter task description"
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Status</label>
      <input
        type="text"
        id="status"
        className="form-control"
        value={data.taskStatus}
        onChange={(e) => updateHandler(e)}
        placeholder="Pending / Completed"
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Priority</label>
      <input
        type="text"
        id="priority"
        className="form-control"
        value={data.priority}
        onChange={(e) => updateHandler(e)}
        placeholder="Low / Medium / High"
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Due Date</label>
      <input
        type="date"
        id="duedate"
        className="form-control"
        value={data.dueDate}
        onChange={(e) => updateHandler(e)}
      />
    </div>

    <button type="submit" className="btn btn-primary w-100">
      Submit Task
    </button>
  </div>
</form>

    </>
  )
}

export default TaskForm