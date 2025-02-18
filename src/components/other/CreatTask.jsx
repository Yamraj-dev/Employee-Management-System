import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreatTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [asignTo, setAsignTo] = useState("")
    const [category, setCategory] = useState("")

    const [newtask, setNewTask] = useState({})

    const submitHandler = (e)=>{
        e.preventDefault()
        setNewTask({taskTitle, taskDescription, taskDate, category, active:false, newTask:true, failed:false, completed:false})
        const data = userData

        data.forEach(function(elem){
            if(asignTo == elem.firstName){
                elem.tasks.push(newtask)
                elem.taskSummary.newTask = elem.taskSummary.newTask + 1
            }
        })
        setUserData(data)
        console.log(data)


        setTaskTitle("")
        setTaskDescription("")
        setTaskDate("")
        setAsignTo("")
        setCategory("")
    }

  return (
    <div className='bg-[#1C1C1C] mt-7 rounded p-8'>
                <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-wrap w-full items-start justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input 
                            value={taskTitle}
                            onChange={(e)=>{
                                setTaskTitle(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border-[1px] border-gray-400 mb-4' type="text" placeholder=' Meke a UI Design' />
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input 
                            value={taskDate}
                            onChange={(e)=>{
                                setTaskDate(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 outtransparent rounded border-[1px] border-gray-400 mb-4' type="date" />
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                            <input 
                            value={asignTo}
                            onChange={(e)=>{
                                setAsignTo(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border-[1px] border-gray-400 mb-4' type="text" placeholder=' employee name' />
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input 
                            value={category}
                            onChange={(e)=>{
                                setCategory(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border-[1px] border-gray-400 mb-4' type="text" placeholder=' design, dev, etc' />
                        </div>
                    </div>
                    <div className='w-1/2 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea
                        value={taskDescription}
                        onChange={(e)=>{
                            setTaskDescription(e.target.value)
                        }}
                        className='border border-gray-400 rounded w-full h-44 text-sm py-2 px-4 outline-none bg-transparent' name="" id="" cols="30" rows="10"></textarea>
                        <button className='w-full bg-emerald-500 hover:bg-emerald-600 px-5 rounded py-3 text-white text-sm mt-4'>Create Task</button>
                    </div>
                </form>
            </div>
  )
}

export default CreatTask
