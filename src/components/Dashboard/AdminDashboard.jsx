import React from 'react'
import Header from '../other/Header'
import CreatTask from '../other/CreatTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser} />
            <CreatTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard
