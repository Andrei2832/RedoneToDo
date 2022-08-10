import { Injectable } from '@angular/core';
import {ColumnModal} from "../models/column-task.modal";
import {TaskModal} from "../models/task.modal";

@Injectable({
  providedIn: 'root'
})
export class ColumnService {

  constructor() { }

  public createFirstTask(textTask: string, deadline: string): ColumnModal[]{
    let columns: ColumnModal[] = [];
    let firstTask: TaskModal[] = [new TaskModal(textTask,deadline,'',[],'Общие задачи')];

    columns.push(new ColumnModal('Общие задачи',firstTask))
    columns.push(new ColumnModal('В работе',[]))
    columns.push(new ColumnModal('Готово',[]))

    return columns
  }

  public createColumn(titleColumn: string): ColumnModal{
    return new ColumnModal(titleColumn,[]);
  }
}
