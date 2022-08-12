import { Injectable } from '@angular/core';
import {ColumnModal} from "../models/column-task.model";
import {TaskModel} from "../models/task.model";
import {MessageModel} from "../models/message.model";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  public addMessage(textMes: string, columnTasks: ColumnModal[], nowTask: TaskModel): ColumnModal[]{
    columnTasks.map(item => {
      for (let task of item.tasks){
        if (task.id === nowTask.id){
          let newMes = new MessageModel(textMes,new Date().toDateString())
          task.messages.push(newMes)
        }
      }
    })
    return columnTasks
  }

  public deleteMessage(delMessage: MessageModel, columnTasks: ColumnModal[]): ColumnModal[]{
    columnTasks.map(item => {
      item.tasks.map(task => {
        for (let mes of task.messages){
          if (mes.id === delMessage.id){
            let index = task.messages.indexOf(mes)
            task.messages.splice(index,1)
          }
        }
      })
    })
    return columnTasks
  }

}
