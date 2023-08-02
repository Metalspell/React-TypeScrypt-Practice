import { useSelector } from 'react-redux';
import { selectTasks, selectDoneTasks } from '@/store/tasksSlice';
import { useDispatch } from 'react-redux';
import { removeDoneTask } from '@/store/tasksSlice';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const DoneTaskList = () => {
  const doneTasks = useSelector(selectDoneTasks);
  const dispatch = useDispatch();

  const handleSubmit = (taskId: number) => {
    dispatch(removeDoneTask(taskId));
  };

  return (
    <ul className='flex flex-col w-[95%] my-5 '>
      {doneTasks.map((task, i) => (
        <div key={i} className='flex items-center justify-between h-20 my-2 border-2 rounded-xl'>
          <div className='flex justify-start w-[95%] px-5'>
            <li
              key={task.id}
              className='flex-grow overflow-hidden break-words'
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
          </div>
        </div>
      ))
      }
    </ul >
  );
};

export default DoneTaskList;
