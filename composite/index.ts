import { CompositeGift } from "./CompositeGift";
import { SingleGift } from "./SingleGift";

const phone = new SingleGift("Phone", 4000);
phone.calculateTotalPrice();

const rootBox = new CompositeGift("RootBox", 0);
const truckToy = new SingleGift("TruckToy", 400);
const plainToy = new SingleGift("PlainToy", 500);

rootBox.add(truckToy);
rootBox.add(plainToy);

const childBox = new CompositeGift("ChildBox", 0);
const soliderToy = new SingleGift("SoliderToy", 200);
childBox.add(soliderToy);
rootBox.add(childBox);

rootBox.calculateTotalPrice();
