import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TaskForm from './pages/TaskForm'
import TaskTable from './pages/TaskTable'
import TaskRow from './pages/TaskRow'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route  path='/' element={<TaskTable/>}></Route>
          <Route path='/taskgo/:id' element={<TaskForm/>}></Route>
          <Route path='/taskadd' element={<TaskRow/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
