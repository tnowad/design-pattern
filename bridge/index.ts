import { Blue } from "./Blue";
import { Circle } from "./Circle";
import { IColor } from "./IColor";
import { Red } from "./Red";
import { Square } from "./Square";

const blue: IColor = new Blue();
const red: IColor = new Red();

const blueSquare: Square = new Square();
blueSquare.color = blue;
console.log(blueSquare);

const redSquare: Square = new Square();
redSquare.color = red;
console.log(redSquare);

const blueCircle: Circle = new Circle();
blueCircle.color = blue;
console.log(blueCircle);
const redCircle: Circle = new Circle();
redCircle.color = red;
console.log(redCircle);
