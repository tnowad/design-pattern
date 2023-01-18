import { GiftBase } from "./GiftBase";

export class SingleGift extends GiftBase {
  public calculateTotalPrice(): number {
    console.log(`${this.name} with the price: ${this.price}`);
    return this.price;
  }
}
