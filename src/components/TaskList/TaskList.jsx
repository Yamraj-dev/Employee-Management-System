import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div className='h-[40%] overflow-x-auto w-full flex items-center flex-nowrap jsutify-satart gap-5 py-5 mt-10 scrollbarnone'>
    {console.log(data.tasks)}
      {data.tasks.map((elem, idx)=>{

        if(elem.active){
            return <AcceptTask key={idx} data={elem} />
        }
        if(elem.newTask){
            return <NewTask key={idx} data={elem} />
        }
        if(elem.completed){
            return <CompleteTask key={idx} data={elem} />
        }
        if(elem.failed){
            return <FailedTask key={idx} data={elem} />
        }
      })}
    </div>
  )
}

export default TaskList
