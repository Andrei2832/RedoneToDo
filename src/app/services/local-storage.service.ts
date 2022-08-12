import { Injectable } from '@angular/core';
import {ColumnModal} from "../models/column-task.model";
import {map, Observable, of} from "rxjs";
import {TaskModel} from "../models/task.model";
import {MessageModel} from "../models/message.model";
import {ConvertDataService} from "./convert-data.service";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
    private convertDataService: ConvertDataService
  ) {}

  public getDataLocalStorage(): Observable<ColumnModal[]>{
    const localStorageData: string = localStorage.getItem('columnTasks') || '';
    return this.convertDataService.convertData(of(!!localStorageData ? JSON.parse(localStorageData) : []))
  }

  public setDataLocalStorage(columnTasks: ColumnModal[]): void {
    if(!columnTasks.map(item => !!item.tasks.length).includes(true)){
      this.deleteDataLocalStorage()
    } else {
      localStorage.setItem('columnTasks', JSON.stringify(columnTasks));
    }
  }

  public deleteDataLocalStorage(): void{
    localStorage.removeItem('columnTasks');
  }


}
