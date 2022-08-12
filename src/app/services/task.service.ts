import { Injectable } from '@angular/core';
import {ColumnModal} from "../models/column-task.model";
import {TaskModel} from "../models/task.model";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public nowColumn: ColumnModal;
  public nowTask: TaskModel;

  constructor(
  ) {}

  public addTask(taskText: string, deadline: string, columnTasks: ColumnModal[]): ColumnModal[]{
    columnTasks.filter(item => {
      if (item.title === this.nowColumn.title){
        item.tasks.push(this.createTask(item.title,taskText,deadline))
      }
    })
    return columnTasks
  }

  public createTask(condition: string, textTask: string, deadline: string): TaskModel{
    return new TaskModel(textTask,deadline,'',[],condition)
  }

  public deleteTask(taskDel: TaskModel, columnTasks: ColumnModal[]): ColumnModal[]{
    columnTasks.map(item => {
      for (let task of item.tasks){
        if (task.id === taskDel.id){
          let index = item.tasks.indexOf(task)
          item.tasks.splice(index,1)
        }
      }
    })
    return columnTasks
  }

  public changeDescriptionTask(text: string, columns: ColumnModal[]): ColumnModal[]{
    columns.map((item) => {
      for (let task of item.tasks){
        if (task.id === this.nowTask.id){
          task.description = text.trim()
        }
      }
    })
    return columns
  }

  public changeCondition(condition: string, columnTasks: ColumnModal[]): ColumnModal[]{
    columnTasks.map(item => {
      for (let task of item.tasks){
        if (task.id === this.nowTask.id){
          let index = item.tasks.indexOf(task)
          item.tasks.splice(index,1)
        }
      }
    })
    this.nowTask.condition = condition
    columnTasks.map(item => {
      if (item.title == condition){
        item.tasks.push(this.nowTask)
      }
    })
    return columnTasks
  }
}
