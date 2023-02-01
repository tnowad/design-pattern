export class Car {
  private _owner!: string;
  private _number!: string;
  private _company!: string;
  private _model!: string;
  private _color!: string;

  public get owner(): string {
    return this._owner;
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public get number(): string {
    return this._number;
  }
  public set number(value: string) {
    this._number = value;
  }
  public get company(): string {
    return this._company;
  }
  public set company(value: string) {
    this._company = value;
  }
  public get model(): string {
    return this._model;
  }
  public set model(value: string) {
    this._model = value;
  }
  public get color(): string {
    return this._color;
  }
  public set color(value: string) {
    this._color = value;
  }
}
