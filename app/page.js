"use client"
import { useState } from "react"

const Page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([]) // Initialize as an array

  const submitHandler = (e) => {
    e.preventDefault()
    if (title && desc) { // Check to avoid empty tasks
      setMainTask([...mainTask, { title, desc }])
      setTitle("")
      setDesc("")
    }
  };
    const deleteHandler =(index)=>{
        let copytask = [...mainTask]
        copytask.splice(index,1)
        setMainTask(copytask)
    }
  

  let renderTask = <h2>No Task Available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, index) => {
       return (
        <li key={index} className="flex items-center justify-between">
      <div key={index} className="flex justify-between p-2 m-2 rounded  w-2/3">
        <h5 className="font-medium text-2xl">{task.title}</h5>
        <h6 className="font-medium text-1xl">{task.desc}</h6>
      </div>
      <button onClick={()=>{deleteHandler(index)}} className="bg-red-400 text-white rounded font-bold w-200xl">Delete</button>
      </li>
       )
  })
  }

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
