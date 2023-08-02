import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from './store';
import { Task, TasksState, MoveTaskPayload } from '@/interfaces';

const initialState: TasksState = {
  tasks: [],
  doneTasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: state.tasks.length + 1,
        title: action.payload,
        completed: false,
        order: state.tasks.length + 1
      };
      state.tasks.push(newTask);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      const indexToRemove = state.tasks.findIndex((task) => task.id === action.payload);
      if (indexToRemove !== -1) {
        state.tasks.splice(indexToRemove, 1);
        state.tasks.forEach((task, index) => {
          task.order = index + 1;
          task.id = index + 1;
        });
      }
    },
    removeDoneTask: (state, action: PayloadAction<number>) => {
      const indexToRemove = state.doneTasks.findIndex((task) => task.id === action.payload);
      if (indexToRemove !== -1) {
        state.doneTasks.splice(indexToRemove, 1);
        state.doneTasks.forEach((task, index) => {
          task.order = index + 1;
          task.id = index + 1;
        });
      }
    },
    pushToDone: (state, action: PayloadAction<number>) => {
      const taskIndex = state.tasks.findIndex((task) => task.id === action.payload);
      if (taskIndex !== -1) {
        const taskToMove = state.tasks[taskIndex];
        state.tasks.splice(taskIndex, 1);
        const newTask: Task = {
          ...taskToMove,
          id: state.doneTasks.length + 1,
        };
        state.doneTasks.push(newTask);
      }
    },
    moveTask: (state, action: PayloadAction<MoveTaskPayload>) => {
      const { taskId, order } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        const [taskToMove] = state.tasks.splice(taskIndex, 1);
        state.tasks.splice(order - 1, 0, taskToMove);
        state.tasks.forEach((task, index) => {
          task.order = index + 1;
        });
      }
    },
  },
});

export const { addTask, removeTask, removeDoneTask, pushToDone, moveTask } = tasksSlice.actions;

export default tasksSlice.reducer;

export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectDoneTasks = (state: RootState) => state.tasks.doneTasks;