import { useSelector } from 'react-redux';
import { selectTasks } from '@/store/tasksSlice';
import { useDispatch } from 'react-redux';
import { removeTask, pushToDone } from '@/store/tasksSlice';
import { useDrop } from 'react-dnd';
import TaskItem from './TaskItem';

const TaskList = () => {
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
    <ul
      className='flex flex-col w-[95%] my-5'
    >
      {tasks.map((task, i) => (
        <TaskItem key={i} task={task} />
      ))}
    </ul >
  );
};

export default TaskList;