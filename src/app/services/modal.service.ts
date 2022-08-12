import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public titleModal: string = 'Добавить задачу'

  public isVisible$ = new BehaviorSubject<boolean>(false)

  public open(): void{
    this.isVisible$.next(true)
  }
  public close(): void{
    this.isVisible$.next(false)
  }
}
