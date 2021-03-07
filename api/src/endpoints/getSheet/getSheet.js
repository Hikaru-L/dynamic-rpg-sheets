"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSheetEndpoint = void 0;
var sheets_json_1 = __importDefault(require("../../../data/sheets.json"));
var getSheetEndpoint = function (req, res) {
    var sheetId = req.query.id;
    var sheets = sheets_json_1.default.sheets;
    console.log(sheets);
    var sheet = sheets.find(function (currSheet) { return currSheet.info.name.toString() === sheetId; });
    console.log('Requested character of: ', sheetId, ' id');
    if (sheet) {
        //deu bom, retornar sheet
        res.send(sheet);
    }
    else {
        res.send('Não tem esse id no banco otário');
    }
    //salvar
};
exports.getSheetEndpoint = getSheetEndpoint;
