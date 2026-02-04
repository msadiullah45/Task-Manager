import { Injectable, signal } from '@angular/core';
import { TaskItem } from '../models/task-item.model';

@Injectable({
  providedIn: 'root',
})
export class Task {
  // database temporary
  tasks= signal<TaskItem[]>([]);
  addTask(task:string, status: string){
    this.tasks.update((previousState)=>{
      return[...previousState,{task,status}];
    })
  }
  markAsStatus(text: string, updatedStatus: string){
    this.tasks.update((previous)=>{
      const findTask = previous.find(x=>x.task ===text);
      if (findTask){
        return [...previous.filter(x=> x.task!==text), {task:text, status: updatedStatus},];
      }
      else {
        return previous;
      }
    })
  }
}
