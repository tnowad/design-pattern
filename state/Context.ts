import { State } from "./State";

export class Context {
  state: State;
  constructor(state: State) {
    this.state = state;
    this.state.setContext(this);
  }

  transitionTo(state: State): void {
    console.log(`Context: Transition to`, state);
    this.state = state;
    this.state.setContext(this);
  }

  request1(): void {
    this.state.handle1();
  }
  request2(): void {
    this.state.handle2();
  }
}
