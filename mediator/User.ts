import { ChatRoom } from "./ChatRoom";

export class User {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  sendMessage(message: string): void {
    ChatRoom.showMessage(this, message);
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}
