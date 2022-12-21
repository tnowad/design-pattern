import { Singleton } from "./Singleton";

const singleton: Singleton = Singleton.getInstance();

const otherSingleton: Singleton = Singleton.getInstance();

console.log(singleton === otherSingleton);
