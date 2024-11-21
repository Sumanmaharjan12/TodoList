"use client"
import { useState } from "react"

const Page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([]) // Initialize as an array

  const submitHandler = (e) => {
    e.preventDefault()
    if (title && desc) { // Check to avoid empty tasks
      const timestamp = new Date().toLocaleString() // Get date and time
      setMainTask([...mainTask, { title, desc, timestamp }])
      setTitle("")
      setDesc("")
    }
  };

  const deleteHandler = (index) => {
    const updatedTasks = [...mainTask]
    updatedTasks.splice(index, 1)
    setMainTask(updatedTasks)
  }

  const renderTask = mainTask.length > 0 ? (
    mainTask.map((task, index) => (
      <li key={index} className="flex items-center justify-between">
        <div className="flex flex-col justify-between p-2 m-2 rounded w-2/3 bg-white shadow">
          <h5 className="font-medium text-2xl">{task.title}</h5>
          <h6 className="font-medium text-xl">{task.desc}</h6>
          <p className="text-gray-500 text-sm">{task.timestamp}</p>
        </div>
        <button onClick={() => deleteHandler(index)} className="text-red-500 hover:text-red-700">
          {/* Trash Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 6.75L4.5 6.75M15.75 6.75V4.5a2.25 2.25 0 00-2.25-2.25H10.5a2.25 2.25 0 00-2.25 2.25v2.25m12 0V19.5A2.25 2.25 0 0115.75 21.75h-7.5A2.25 2.25 0 016 19.5V6.75m12 0h-9" />
          </svg>
        </button>
      </li>
    ))
  ) : (
    <h2>No Task Available</h2>
  )

  return (
    <div>
      <h1 className="bg-black text-white text-5xl font-bold text-center mt-2">MY TODO LIST</h1>
      <form onSubmit={submitHandler}>
        <input 
          type="text" 
          className="text-lg border-zinc-800 border-2 m-8 px-4 py-2" 
          placeholder="Enter Task Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="text" 
          className="text-lg border-zinc-800 border-2 m-8 px-4 py-2" 
          placeholder="Enter Task Description" 
          value={desc} 
          onChange={(e) => setDesc(e.target.value)} 
        />
        <button className="bg-black text-white px-4 py-2 font-bold rounded m-5">Add Task</button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        {mainTask.length > 0 ? (
          <ul>{renderTask}</ul>
        ) : (
          renderTask
        )}
      </div>
    </div>
  )
}

export default Page
