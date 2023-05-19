import { CSVDataMiner } from "./CSVDataMiner";
import { PDFDataMiner } from "./PDFDataMiner";

const pdfDataMiner: PDFDataMiner = new PDFDataMiner();
pdfDataMiner.mine("pdf path");
const csvDataMiner: CSVDataMiner = new CSVDataMiner();
csvDataMiner.mine("csv path");
