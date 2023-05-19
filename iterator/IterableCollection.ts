export interface IterableCollection<T> {
  createIterator(): Iterator<T>;
}
