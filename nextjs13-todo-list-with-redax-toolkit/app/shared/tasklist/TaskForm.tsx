import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '@/store/tasksSlice';
import Button from '../elements/Button';

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskTitle.trim() !== '') {
      dispatch(addTask(taskTitle));
      setTaskTitle('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex justify-center items-center w-[90%] mt-10 h-[4vw]'
    >
      <div className="relative flex w-[80%] h-full">
        <input
          type="text"
          className="w-full px-4 py-2 mx-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your text..."
          value={taskTitle}
          onChange={handleInputChange}
        />
      </div>
      <Button
        type="submit"
        version='V3'
        shape="10px"
        font="1.5vw"
      >
        Add Task
      </Button>
    </form>
  );
};

export default TaskForm;