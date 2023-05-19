import { IterableCollection } from "./IterableCollection";
import { ListIterator } from "./ListIterator";
import { Iterator } from "./Iterator";
export class ListCollection<T> implements IterableCollection<T> {
  private list: T[];

  constructor() {
    this.list = [];
  }

  add(element: T) {
    this.list.push(element);
  }

  createIterator(): Iterator<T> {
    return new ListIterator<T>(this.list);
  }
}
