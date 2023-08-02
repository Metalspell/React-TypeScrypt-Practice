export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CartItem {
  product: Product;
  qty: number;
}

export interface CartState {
  cartItems: CartItem[];
}

export interface ProvidersProps {
  children: React.ReactNode;
}

export interface ButtonProps {
  version: string,
  shape: string,
  children: React.ReactNode,
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  font: string;
}

export interface Task {
  id: number;
  title?: string;
  completed: boolean;
  order: number;
}

export interface TasksState {
  tasks: Task[];
  doneTasks: Task[];
}

export interface MoveTaskPayload {
  taskId: number;
  order: number;
}

export interface TaskItemProps {
  task: Task;
}