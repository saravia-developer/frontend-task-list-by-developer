interface Tasks {
  nameTask: string;
  description: string;
  isCompleted: boolean;
  estimatedTime: number;
  category: number;
}

export interface ICreateTask extends Tasks {}
export interface IUpdateTask extends Partial<Tasks> {}

export interface ITask {
  task_id: number;
  name_task: string;
  description: string;
  is_completed: number;
  created_at: Date | null;
  estimated_time: number;
  name_category: string;
}
