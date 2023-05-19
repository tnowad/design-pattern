import { Iterator } from "./Iterator";

export class ListIterator<T> implements Iterator<T> {
  private list: T[];
  private index: number;

  constructor(list: T[]) {
    this.list = list;
    this.index = 0;
  }

  hasNext(): boolean {
    return this.index < this.list.length;
  }

  next(): T | null {
    if (this.hasNext()) {
      return this.list[this.index++];
    }
    return null;
  }
}
