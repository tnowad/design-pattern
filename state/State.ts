import { Context } from "./Context";

export abstract class State {
  context!: Context;

  setContext(context: Context) {
    this.context = context;
  }

  public abstract handle1(): void;
  public abstract handle2(): void;
}
