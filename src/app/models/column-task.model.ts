import {TaskModel} from "./task.model";

export class ColumnModal{
  _id: string;
  _title: string;
  _tasks: TaskModel[];

  constructor(title: string, tasks: TaskModel[], id?: string) {
    this._id = id ? id : this.uuidv4();
    this.title = title;
    this.tasks = tasks;
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

  public get tasks(): TaskModel[]{
    return this._tasks;
  }
  public set tasks(value: TaskModel[]){
    this._tasks = value;
  }
}
