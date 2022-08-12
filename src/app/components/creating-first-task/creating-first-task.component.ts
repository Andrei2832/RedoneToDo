import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../../app.component";
import {LocalStorageService} from "../../services/local-storage.service";
import {ColumnService} from "../../services/column.service";

@Component({
  selector: 'app-creating-first-task',
  templateUrl: './creating-first-task.component.html',
  styleUrls: ['./creating-first-task.component.scss']
})
export class CreatingFirstTaskComponent implements OnInit {

  constructor(
    private appComponent: AppComponent,
    private localStorageService:LocalStorageService,
    private columnService: ColumnService,
  ) { }

  public ngOnInit(): void {
  }

  public createFirstTask(task: any, deadline: any): void{
    if (task.value.trim() && deadline.value.trim()){
      let firstColumns = this.columnService.createFirstTask(task.value,deadline.value);
      this.localStorageService.setDataLocalStorage(firstColumns)
      this.appComponent.UpdateData()
    }
    if (!task.value.trim()){
      task.classList.add('error')
    }
    if(!deadline.value.trim()){
      deadline.classList.add('error')
    }
  }

  public inputChange(Task: Element): void{
    Task.classList.remove('error')
  }
}
