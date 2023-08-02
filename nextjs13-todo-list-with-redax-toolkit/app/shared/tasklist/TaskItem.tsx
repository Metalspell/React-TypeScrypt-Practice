import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoMdDoneAll } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { selectTasks } from '@/store/tasksSlice';
import { useDispatch } from 'react-redux';
import { removeTask, pushToDone } from '@/store/tasksSlice';
import { TaskItemProps } from '@/interfaces';

const TaskItem = ({task}: TaskItemProps) => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const handleStatusChange = (taskId: number) => {
    dispatch(pushToDone(taskId));
    dispatch(removeTask(taskId));
  };

  const handleSubmit = (taskId: number) => {
    dispatch(removeTask(taskId));
  };

  return (
    <div className='flex items-center justify-around h-20 my-2 border-2 rounded-xl'>
      <div className='flex justify-start w-[95%]'>
        <li
          key={task.id}
          className='flex-grow pl-5 overflow-hidden break-words'
        >
          {task.id}. {task.title}
        </li>
      </div>
      <div className='flex flex-col justify-around items-center h-full w-[5%]'>
        <AiOutlineCloseCircle
          onClick={() => handleSubmit(task.id)}
          className="cursor-pointer"
          size='1.3em'
        />
        <IoMdDoneAll
          onClick={() => handleStatusChange(task.id)}
          className="cursor-pointer"
          size='1.3em'
        />
      </div>
    </div>
  )
}

export default TaskItem