import React, { useContext } from 'react'
import { AuthContext } from "../../context/AuthProvider"


const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)


    return (
        <div id='allTask' className='bg-[#1c1c1c] p-5 mt-5 rounded'>
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-1/5 text-white text-lg font-medium'>Employee Name</h2>
                <h3 className='w-1/5 text-white text-lg font-medium'>New Task</h3>
                <h5 className='w-1/5 text-white text-lg font-medium'>Active Task</h5>
                <h5 className='w-1/5 text-white text-lg font-medium'>Completed</h5>
                <h5 className='w-1/5 text-white text-lg font-medium'>Failed</h5>
            </div>
            <div className='scrollbarnone'>
                {userData.map(function (elem, idx) {
                    return (
                        <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                            <h2 className='text-lg font-medium w-1/5 text-white'>{elem.firstName}</h2>
                            <h3 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskSummary.newTask}</h3>
                            <h5 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskSummary.active}</h5>
                            <h5 className='text-lg font-medium w-1/5 text-green-400'>{elem.taskSummary.completed}</h5>
                            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskSummary.failed}</h5>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default AllTask
