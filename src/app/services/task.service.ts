import { Injectable } from '@angular/core';
import {ColumnModal} from "../models/column-task.modal";
import {TaskModal} from "../models/task.modal";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public nowColumn: ColumnModal;

  constructor(
    private localStorageService: LocalStorageService,
  ) {}

  public addTask(taskText: string, deadline: string): ColumnModal[]{
    let columnTasks: ColumnModal[] = [];
    this.localStorageService.getDataLocalStorage()?.subscribe(event => columnTasks = event)

    // columnTasks.filter(item => {
    //   if (item.title === this.nowColumn.title){
    //     item.tasks.push(this.createTask(item.title,taskText,deadline))
    //   }
    // })
    return columnTasks
  }

  public createTask(condition: string, textTask: string, deadline: string): TaskModal{
    return new TaskModal(textTask,deadline,'',[],condition)
  }
}
