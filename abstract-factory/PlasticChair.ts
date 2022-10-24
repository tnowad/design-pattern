import { IChair } from "./IChair";

export class PlasticChair implements IChair {
  create(): void {
    console.log("Create plastic chair");
  }
}
