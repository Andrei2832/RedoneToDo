import { Injectable } from '@angular/core';
import {ColumnModal} from "../models/column-task.model";
import {TaskModel} from "../models/task.model";

@Injectable({
  providedIn: 'root'
})
export class ColumnService {

  constructor() { }

  public createFirstTask(textTask: string, deadline: string): ColumnModal[]{
    let columns: ColumnModal[] = [];
    let firstTask: TaskModel[] = [new TaskModel(textTask,deadline,'',[],'Общие задачи')];

    columns.push(new ColumnModal('Общие задачи',firstTask))
    columns.push(new ColumnModal('В работе',[]))
    columns.push(new ColumnModal('Готово',[]))

    return columns
  }

  public createColumn(titleColumn: string): ColumnModal{
    return new ColumnModal(titleColumn,[]);
  }

  public deleteColumn(deleteColumn: ColumnModal, columns: ColumnModal[]): ColumnModal[]{
    let indexColumn = columns.indexOf(deleteColumn)
    columns.splice(indexColumn,1)
    return columns
  }
}
