import { Iterator } from "./Iterator";
import { ListCollection } from "./ListCollection";

const collection: ListCollection<string> = new ListCollection<string>();
collection.add("Element 1");
collection.add("Element 2");
collection.add("Element 3");

const iterator: Iterator<string> = collection.createIterator();
while (iterator.hasNext()) {
  console.log(iterator.next());
}
