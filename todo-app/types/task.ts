type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  date: string;
};

export type AddTaskType = {
  title: string;
  description: string;
  completed: boolean;
};

export default Task;
