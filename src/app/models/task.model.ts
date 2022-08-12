import {MessageModel} from "./message.model";

export class TaskModel {
  _id: string;
  _title: string;
  _deadline: string;
  _description: string;
  _messages: MessageModel[];
  _condition: string;

  constructor(title: string, deadline: string, description: string, messages: MessageModel[], condition: string, id?: string) {
    this._id = id ? id : this.uuidv4();
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

  public get id(): string{
    return this._id
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

  public get messages(): MessageModel[]{
    return this._messages;
  }
  public set messages(value: MessageModel[]){
    this._messages = value;
  }

  public get condition(): string{
    return this._condition;
  }
  public set condition(value: string){
    this._condition = value;
  }
}
