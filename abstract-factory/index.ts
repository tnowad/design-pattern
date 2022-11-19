import { FurnitureAbstractFactory } from "./FurnitureAbstractFactory";
import { FurnitureFactory } from "./FurnitureFactory";
import { MaterialType } from "./MaterialType";
import { IChair } from "./IChair";
import { ITable } from "./ITable";

const plasticFactory: FurnitureAbstractFactory = FurnitureFactory.getFactory(
  MaterialType.PLASTIC
);

const plasticChair: IChair = plasticFactory.createChair();
plasticChair.create();
const plasticTable: ITable = plasticFactory.createTable();
plasticTable.create();

const woodFactory: FurnitureAbstractFactory = FurnitureFactory.getFactory(
  MaterialType.WOOD
);

const woodChair: IChair = woodFactory.createChair();
woodChair.create();
const woodTable: ITable = woodFactory.createTable();
woodTable.create();
