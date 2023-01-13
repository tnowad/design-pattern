export abstract class GiftBase {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  public abstract calculateTotalPrice(): number;
}
