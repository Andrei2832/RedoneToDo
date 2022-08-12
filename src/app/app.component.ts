import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "./services/local-storage.service";
import {ModalService} from "./services/modal.service";
import {ColumnModal} from "./models/column-task.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public checkTask: Boolean = false;
  public data: ColumnModal[];

  constructor(
    private localStorageService: LocalStorageService,
    public modalService: ModalService
  ) {}

  public ngOnInit(): void {
    this.UpdateData()
  }

  public UpdateData(): void{
    this.localStorageService.getDataLocalStorage().subscribe((item) => this.data = item)
    this.checkTask = !!this.data.length;
  }
}
