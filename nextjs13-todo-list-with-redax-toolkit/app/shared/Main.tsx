"use client"
import { useSelector, useDispatch } from 'react-redux';
import TaskForm from './tasklist/TaskForm';
import TaskList from './tasklist/TaskList';
import DoneTaskList from './tasklist/DoneTaskList';
import { selectTasks, selectDoneTasks } from '@/store/tasksSlice';


const Main: React.FC = () => {
  const tasks = useSelector(selectTasks);
  const doneTasks = useSelector(selectDoneTasks);
  return (
    <section className='flex flex-col items-center justify-center w-full h-auto mb-10'>
      <h1 className='text-[3.5vw] leading-[4vw] text-black uppercase font-bold'>Todo List</h1>
      <TaskForm />
      <div className='flex w-[90%] mt-10 flex-col sm:flex-row'>
        <div className='flex flex-col items-center w-full sm:w-1/2'>
          {tasks.length !== 0 ?
            <h1 className='text-[3.5vw] text-center leading-[4vw] text-black uppercase font-bold w-full'>Must do!</h1>
            :
            null
          }
          <TaskList />
        </div>
        <div className='flex flex-col items-center w-full sm:w-1/2'>
          {doneTasks.length !== 0 ?
            <h1 className='text-[3.5vw] leading-[4vw] text-black uppercase font-bold w-full text-center'>Done!</h1>
            :
            null
          }
          <DoneTaskList />
        </div>
      </div>
    </section>
  );
};

export default Main;


