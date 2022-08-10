import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ModalService} from "../../services/modal.service";
import {ColumnModal} from "../../models/column-task.modal";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl<string>('')
  })

  constructor(
    private modalService: ModalService,
    private taskService: TaskService,
  ) {}

  public ngOnInit(): void {
  }

  public submit(): void{
  }

  public createTask(textTask: any, deadline: any): void{
    if (textTask.value.trim() && deadline.value.trim()){
      let newTask = this.taskService.addTask(textTask,deadline)
      console.log(newTask)
      // this.localStorageService.addTask(textTask.value,deadline.value);
      this.modalService.close();
    }
    if (!textTask.value.trim()){
      textTask.classList.add('error')
    }
    if(!deadline.value.trim()){
      deadline.classList.add('error')
    }
  }

  public inputChange(Task: Element): void{
    Task.classList.remove('error')
  }
}
