import React, { useState } from 'react'
import axios from 'axios'

const TaskRow = () => {
  const [data, setData] = useState({
    taskTitle: '',
    taskDescription: '',
    taskStatus: '',
    priority: '',
    dueDate: ''
  })

  const updateHandler = (e) => {
    setData({ ...data, [e.target.id]: e.target.value })
  }

  const submitHamdler = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://74.225.243.159:3000/tasks/', data)

      // Reset form after submit
      setData({
        taskTitle: '',
        taskDescription: '',
        taskStatus: '',
        priority: '',
        dueDate: ''
      })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h4 className="text-center mb-4">Add New Task</h4>

        <form onSubmit={submitHamdler}>
          <div className="mb-3">
            <label className="form-label">Task Title</label>
            <input
              type="text"
              id="taskTitle"
              className="form-control"
              value={data.taskTitle}
              onChange={updateHandler}
              placeholder="Enter task title"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Task Description</label>
            <input
              type="text"
              id="taskDescription"
              className="form-control"
              value={data.taskDescription}
              onChange={updateHandler}
              placeholder="Enter description"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              id="taskStatus"
              className="form-select"
              value={data.taskStatus}
              onChange={updateHandler}
              required
            >
              <option value="">Select status</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Priority</label>
            <select
              id="priority"
              className="form-select"
              value={data.priority}
              onChange={updateHandler}
              required
            >
              <option value="">Select priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Due Date</label>
            <input
              type="date"
              id="dueDate"
              className="form-control"
              value={data.dueDate}
              onChange={updateHandler}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Save Task
          </button>
        </form>
      </div>
    </div>
  )
}

export default TaskRow
