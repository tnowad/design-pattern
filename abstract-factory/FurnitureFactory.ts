import { PlasticFactory } from "./PlasticFactory";
import { FurnitureAbstractFactory } from "./FurnitureAbstractFactory";
import { MaterialType } from "./MaterialType";
import { WoodFactory } from "./WoodFactory";
export class FurnitureFactory {
  static getFactory(materialType: MaterialType): FurnitureAbstractFactory {
    switch (materialType) {
      case MaterialType.PLASTIC:
        return new PlasticFactory();
      case MaterialType.WOOD:
        return new WoodFactory();
      default:
        throw new Error("This furniture is unsupported.");
    }
  }
}
