import { Subject } from "./Subject";
import { IObserver } from "./IObserver";
const subject: Subject = new Subject();
const observer1: IObserver = {
  update: (message: string) => {
    console.log("Observer 1: ", message);
  },
};

const observer2: IObserver = {
  update: (message: string) => {
    console.log("Observer 2: ", message);
  },
};

subject.attach(observer1);
subject.attach(observer2);
subject.notifyChange("Hello World");
subject.detach(observer1);
subject.notifyChange("Hi");
