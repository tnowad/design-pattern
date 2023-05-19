import { IObserver } from "./IObserver";

export class Subject {
  observers: IObserver[] = [];
  attach(observer: IObserver) {
    this.observers.push(observer);
  }
  detach(observer: IObserver) {
    this.observers = this.observers.filter((observerItem: IObserver) => {
      return observerItem !== observer;
    });
  }
  notifyChange(message: string) {
    this.observers.forEach((observer: IObserver) => {
      observer.update(message);
    });
  }
}
