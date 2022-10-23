import { FurnitureAbstractFactory } from "./FurnitureAbstractFactory";
import { FurnitureFactory } from "./FurnitureFactory";
import { MaterialType } from "./MaterialType";
import { IChair } from "./IChair";
import { ITable } from "./ITable";
const flasticFactory = FurnitureFactory.getFactory(MaterialType.PLASTIC);

const chair: IChair = flasticFactory.createChair();

chair.create();

const table: ITable = flasticFactory.createTable();

table.create();
