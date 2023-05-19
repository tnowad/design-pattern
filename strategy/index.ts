import { ExportContext } from "./ExportContext";
import { ExportJPG } from "./ExportJPG";
import { ExportPDF } from "./ExportPDF";
import { ExportPNG } from "./ExportPNG";

const context: ExportContext = new ExportContext(new ExportPNG());
context.createArchive("Mushroom");
context.setStrategy(new ExportJPG());
context.createArchive("Mushroom");
context.setStrategy(new ExportPDF());
context.createArchive("Mushroom");
