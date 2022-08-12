import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {TaskService} from "../../services/task.service";
import {ModalService} from "../../services/modal.service";
import {ColumnService} from "../../services/column.service";
import {LocalStorageService} from "../../services/local-storage.service";
import {ColumnModal} from "../../models/column-task.model";

@Component({
  selector: 'app-add-column',
  templateUrl: './add-column.component.html',
  styleUrls: ['./add-column.component.scss']
})
export class AddColumnComponent implements OnInit {

  @Input() public columns: ColumnModal[];

  form = new FormGroup({
    title: new FormControl<string>('',[
    ])
  })

  constructor(
    private taskService:TaskService,
    private modalService:ModalService,
    private columnService:ColumnService,
    private localStorageService:LocalStorageService,
  ) {}

  public ngOnInit(): void {
  }

  public submit(): void{
  }

  public createColumn(Task: any): void{
    if (Task.value.trim()){
      this.columns.push(this.columnService.createColumn(Task.value))
      this.localStorageService.setDataLocalStorage(this.columns)
      this.modalService.close();
    } else {
      Task.classList.add('column__error')
    }
  }

  public inputChange(Task: Element): void{
    Task.classList.remove('column__error')
  }
}
