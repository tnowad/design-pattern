import { FurnitureAbstractFactory } from "./FurnitureAbstractFactory";
import { FurnitureFactory } from "./FurnitureFactory";
import { MaterialType } from "./MaterialType";
import { IChair } from "./IChair";
import { ITable } from "./ITable";

const plasticFactory: FurnitureAbstractFactory = FurnitureFactory.getFactory(
  MaterialType.PLASTIC
);

const chair: IChair = plasticFactory.createChair();

chair.create();

const table: ITable = plasticFactory.createTable();

table.create();
