import {Component, Input, OnInit} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage.service";
import {ColumnModal} from "../../models/column-task.modal";
import {TaskModal} from "../../models/task.modal";
import {ModalService} from "../../services/modal.service";
import {AddTaskComponent} from "../add-task/add-task.component";
import {TaskService} from "../../services/task.service";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public columns: any;

  constructor(
    private localStorageService:LocalStorageService,
    private modalService: ModalService,
    private taskService: TaskService,
  ) {
    this.localStorageService.getDataLocalStorage()?.subscribe((event: ColumnModal[]) => this.columns = Object.values(event))
  }

  public ngOnInit(): void {
    // this.localStorageService.getDataLocalStorage().subscribe(event => this.columns = event)
  }

  public addTask(nowColumn: ColumnModal): void{
    this.taskService.nowColumn = nowColumn
    this.modalService.titleModal = 'Добавить задачу';
    this.modalService.open();
  }

  public showDetailTask(task: TaskModal): void{
    // this.localStorageService.nowTask = task ;
    // this.modalService.titleModal = '';
    // this.modalService.open();
  }

  public deleteColumn(): void{
    // this.localStorageService.deleteColumn(this.task)
  }

  public deleteTask(task: TaskModal): void{
    // this.localStorageService.deleteTask(task)
  }
}
