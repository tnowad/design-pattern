import { FurnitureAbstractFactory } from "./FurnitureAbstractFactory";
import { MaterialType } from "./MaterialType";
export class FurnitureFactory {
  static getFactory(materialType: MaterialType): FurnitureAbstractFactory {
    switch (materialType) {
      case MaterialType.PLASTIC:
        break;
      default:
        break;
    }
  }
}
