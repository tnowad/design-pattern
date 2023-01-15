import { GiftBase } from "./GiftBase";

export class SingleGift extends GiftBase {
  public calculateTotalPrice(): number {
    return this.price;
  }
}
