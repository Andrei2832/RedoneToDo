import {TaskModal} from "./task.modal";

export class ColumnModal{
  private id: string;
  private _title: string;
  private _tasks: TaskModal[];

  constructor(title: string, tasks: TaskModal[]) {
    this.id = this.uuidv4();
    this.title = title;
    this.tasks = tasks;
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

  public get tasks(): TaskModal[]{
    return this._tasks;
  }
  public set tasks(value: TaskModal[]){
    this._tasks = value;
  }
}
