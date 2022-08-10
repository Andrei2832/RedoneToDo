import {MessageModal} from "./message.modal";

export class TaskModal{
  private id: string;
  private _title: string;
  private _deadline: string;
  private _description: string;
  private _messages: MessageModal[];
  private _condition: string;

  constructor(title: string, deadline: string, description: string, messages: MessageModal[], condition: string) {
    this.id = this.uuidv4();
    this.title = title;
    this.deadline = deadline;
    this.description = description;
    this.messages = messages;
    this.condition = condition;
  }

  uuidv4() {
    return ("10000000-1000-4000-8000-100000000000").replace(/[018]/g, c =>
      (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
  }

  public get title(): string{
    return this._title;
  }
  public set title(value: string){
    this._title = value;
  }

  public get deadline(): string{
    return this._deadline;
  }
  public set deadline(value: string){
    this._deadline = value;
  }

  public get description(): string{
    return this._description;
  }
  public set description(value: string){
    this._description = value;
  }

  public get messages(): MessageModal[]{
    return this._messages;
  }
  public set messages(value: MessageModal[]){
    this._messages = value;
  }

  public get condition(): string{
    return this._condition;
  }
  public set condition(value: string){
    this._condition = value;
  }
}
