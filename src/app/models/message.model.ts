export class MessageModel {
  _id: string;
  _text: string;
  _date: string;

  constructor(text: string, date: string, id?: string) {
    this._id = id ? id : this.uuidv4();
    this.text = text;
    this.date = date;
  }

  uuidv4() {
    return ("10000000-1000-4000-8000-100000000000").replace(/[018]/g, c =>
      (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
  }

  public get id(): string{
    return this._id
  }

  public get text(): string{
    return this._text;
  }
  public set text(value: string){
    this._text = value;
  }

  public get date(): string{
    return this._date;
  }
  public set date(value: string){
    this._date = value;
  }
}
