import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ModalService} from "../../services/modal.service";
import {LocalStorageService} from "../../services/local-storage.service";
import {BehaviorSubject} from "rxjs";
import {ColumnModal} from "../../models/column-task.model";
import {TaskModel} from "../../models/task.model";
import {TaskService} from "../../services/task.service";
import {TaskListComponent} from "../task-list/task-list.component";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.scss']
})
export class DetailTaskComponent implements OnInit {

  @Input() public columns: ColumnModal[];
  public task: TaskModel = this.taskService.nowTask;

  constructor(
    private modalService: ModalService,
    private localStorageService:LocalStorageService,
    private taskService: TaskService,
    private messageService: MessageService,
  ) {}

  public ngOnInit(): void {}

  form = new FormGroup({
    title: new FormControl<string>('')
  })

  public submit(): void{
  }

  public changeDescription(text: string): void{
    if (text.trim()){
      let changeTask = this.taskService.changeDescriptionTask(text, this.columns)
      this.localStorageService.setDataLocalStorage(changeTask)
    }
  }

  public addMessage(textMes: string): void{
    if (textMes.trim()){
      let changeTask = this.messageService.addMessage(textMes, this.columns, this.task)
      this.localStorageService.setDataLocalStorage(changeTask)
    }
  }

  public changeCondition(condition: string): void{
    let changeTask = this.taskService.changeCondition(condition, this.columns)
    this.localStorageService.setDataLocalStorage(changeTask)
    this.modalService.close()
  }
}
