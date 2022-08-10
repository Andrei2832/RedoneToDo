import { Component } from '@angular/core';
import {LocalStorageService} from "./services/local-storage.service";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public checkTask: Boolean = false;
  title = 'RedoneToDo';
  constructor(
    private localStorageService: LocalStorageService,
    public modalService: ModalService
  ) {
    this.checkUpdate();
  }
  public checkUpdate(): void{
    this.checkTask = !this.localStorageService.getDataLocalStorage();
  }
}
