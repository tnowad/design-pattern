import { GiftBase } from "./GiftBase";
import { IGiftOperation } from "./IGiftOperation";

export class CompositeGift extends GiftBase implements IGiftOperation {
  private _gifts!: GiftBase[];

  constructor(name: string, price: number) {
    super(name, price);
    this._gifts = [];
  }

  add(giftBase: GiftBase): void {
    this._gifts.push(giftBase);
  }
  remove(giftBase: GiftBase): void {
    this._gifts.filter((gift: GiftBase) => {
      return giftBase != gift;
    });
  }

  public calculateTotalPrice(): number {
    let total: number = 0;
    this._gifts.forEach((gift: GiftBase) => {
      total = total + gift.calculateTotalPrice();
    });
    console.log(
      `${this.name} contains the following products with prices: ${total}`
    );
    return total;
  }
  public get gifts(): GiftBase[] {
    return this._gifts;
  }
  public set gifts(value: GiftBase[]) {
    this._gifts = value;
  }
}
