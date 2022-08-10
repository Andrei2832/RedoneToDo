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

  public createFirstTask(task: string, deadline: string): void{
    if (task && deadline){
      let firstColumns = this.columnService.createFirstTask(task,deadline);
      this.localStorageService.setDataLocalStorage(firstColumns)
      this.appComponent.checkUpdate()
    }
  }
}
