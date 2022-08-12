import {Component, Input, OnInit} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage.service";
import {MessageModel} from "../../models/message.model";
import {ColumnModal} from "../../models/column-task.model";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: MessageModel;
  @Input() columns: ColumnModal[];

  constructor(
    private localStorageService: LocalStorageService,
    private messageService: MessageService,
  ) { }

  public ngOnInit(): void {
  }

  public deleteMessage(): void{
    let changeMes = this.messageService.deleteMessage(this.message, this.columns)
    this.localStorageService.setDataLocalStorage(changeMes)
  }
}
