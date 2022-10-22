import { FurnitureAbstractFactory } from "./FurnitureAbstractFactory";
import { FurnitureFactory } from "./FurnitureFactory";
import { MaterialType } from "./MaterialType";

FurnitureAbstractFactory factory = FurnitureFactory.getFactory(MaterialType.PLASTIC);