import { IChair } from "./IChair";

export class WoodChair implements IChair {
  create(): void {
    console.log("Create wood chair");
  }
}
