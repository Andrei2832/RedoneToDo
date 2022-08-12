import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ModalService} from "../../services/modal.service";
import {ColumnModal} from "../../models/column-task.model";
import {TaskService} from "../../services/task.service";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Input() public columns: ColumnModal[];

  form = new FormGroup({
    title: new FormControl<string>('')
  })

  constructor(
    private modalService: ModalService,
    private taskService: TaskService,
    public localStorageService: LocalStorageService,
  ) {}

  public ngOnInit(): void {
  }

  public submit(): void{
  }

  public createTask(textTask: any, deadline: any): void{
    if (textTask.value.trim() && deadline.value.trim()){
      let newTask = this.taskService.addTask(textTask.value,deadline.value, this.columns)
      this.localStorageService.setDataLocalStorage(newTask)
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
