import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Task } from '../../services/task';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
taskService = inject(Task);

taskForm = new FormGroup({
  task: new FormControl('',{
    nonNullable: true
  }),
  status: new FormControl('todo', {
    nonNullable:true
  })
})
onSubmit(){
  //log to console
  const rawValue = this.taskForm.getRawValue();
  this.taskService.addTask(rawValue.task, rawValue.status);
  console.log(this.taskForm.getRawValue());
  this.taskForm.reset();
}
}
