import { User } from "./User";

export class ChatRoom {
  static showMessage(user: User, message: string) {
    console.log(`${new Date().toISOString()} [${user.name}]: ${message}`);
  }
}
