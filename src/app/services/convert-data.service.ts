import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {ColumnModal} from "../models/column-task.model";
import {TaskModel} from "../models/task.model";
import {MessageModel} from "../models/message.model";

@Injectable({
  providedIn: 'root'
})
export class ConvertDataService {

  constructor() { }

  public convertData(data: Observable<ColumnModal[]>): Observable<ColumnModal[]>{
    return data.pipe(
      map((item) => {
        return this.convertColumn(item)
      })
    )
  }

  private convertColumn(columns: ColumnModal[]): ColumnModal[]{
    return columns.map((column) => {
      return new ColumnModal(
        column._title,
        column._tasks ? this.convertTask(column._tasks) : [],
        column._id
      )
    })
  }

  private convertTask(tasks: TaskModel[]): TaskModel[]{
    return tasks.map((task) => {
      return new TaskModel(
        task._title,
        task._deadline,
        task._description,
        task._messages ? this.convertMessage(task._messages) : [],
        task._condition
      )
    })
  }

  private convertMessage(messages: MessageModel[]): MessageModel[]{
    return messages.map((message) => {
      return new MessageModel(
        message._text,
        message._date,
        message._id
      )
    })
  }
}
