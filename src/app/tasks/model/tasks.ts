import { TasksI } from "../interface/tasks-i";

export class Tasks {
  id!: number;
  content!: string;
  description!: string;
  deadline!: Date;
  isDone!: boolean;

  constructor(obj?: Partial<Tasks>) {
    if(obj){
      Object.assign(obj);
    }
  }
}
