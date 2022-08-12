import {Component, Input, OnInit} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage.service";
import {ColumnModal} from "../../models/column-task.model";
import {TaskModel} from "../../models/task.model";
import {ModalService} from "../../services/modal.service";
import {TaskService} from "../../services/task.service";
import {AppComponent} from "../../app.component";
import {ColumnService} from "../../services/column.service";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() public columns: ColumnModal[];

  constructor(
    private localStorageService:LocalStorageService,
    private modalService: ModalService,
    private taskService: TaskService,
    private appComponent: AppComponent,
    private columnService: ColumnService,
  ) {}

  public ngOnInit(): void {
  }

  public addTask(nowColumn: ColumnModal): void{
    this.taskService.nowColumn = nowColumn
    this.modalService.titleModal = 'Добавить задачу';
    this.modalService.open();
  }

  public showDetailTask(task: TaskModel): void{
    this.taskService.nowTask = task;
    this.modalService.titleModal = '';
    this.modalService.open();
  }

  public deleteColumn(deleteColumn: ColumnModal): void{
    let newColumns = this.columnService.deleteColumn(deleteColumn, this.columns)
    this.localStorageService.setDataLocalStorage(newColumns)

    if(!newColumns.map(item => !!item.tasks.length).includes(true)){
      this.appComponent.UpdateData()
    }
  }

  public deleteTask(task: TaskModel): void{
    let newColumns = this.taskService.deleteTask(task, this.columns);
    this.localStorageService.setDataLocalStorage(newColumns)

    if(!newColumns.map(item => !!item.tasks.length).includes(true)){
      this.appComponent.UpdateData()
    }
  }

  public createColumn(): void{
    this.modalService.titleModal = 'Добавить колонку';
    this.modalService.open();
  }
}
