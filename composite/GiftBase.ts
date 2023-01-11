export abstract class GiftBase {
  private name: string;
  private price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  public abstract calculateTotalPrice(): number;
}
