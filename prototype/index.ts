import { ComponentWithBackReference } from "./ComponentWithBackReference";
import { Prototype } from "./Prototype";

const prototype = new Prototype();
prototype.primitive = 123;
prototype.component = new Date();
prototype.circularReference = new ComponentWithBackReference(prototype);

const prototypeCloned = prototype.clone();

console.log(
  prototype.primitive === prototypeCloned.primitive,
  prototype.component === prototypeCloned.component,
  prototype.circularReference === prototypeCloned.circularReference,
  prototype.circularReference.prototype ===
    prototypeCloned.circularReference.prototype
);
