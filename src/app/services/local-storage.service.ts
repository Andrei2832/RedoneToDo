import { Injectable } from '@angular/core';
import {ColumnModal} from "../models/column-task.modal";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public getDataLocalStorage(): Observable<ColumnModal[]> | undefined{
    let data: Observable<ColumnModal[]> | undefined;
    try {
      data = of(JSON.parse(localStorage.getItem('columnTasks') || ''))
    }catch (e){
    }
    return data
  }

  public setDataLocalStorage(columnTasks: ColumnModal[]): void {
    localStorage.setItem('columnTasks', JSON.stringify({columnTasks: columnTasks}));
  }

}
