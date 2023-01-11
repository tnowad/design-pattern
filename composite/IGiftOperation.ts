import { GiftBase } from "./GiftBase";

export interface IGiftOperation {
  add(giftBase: GiftBase): void;
  remove(giftBase: GiftBase): void;
}
