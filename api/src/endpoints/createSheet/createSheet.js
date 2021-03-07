"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSheetEndpoint = void 0;
var fs_1 = __importDefault(require("fs"));
var sheets_json_1 = __importDefault(require("../../../data/sheets.json"));
var createSheetEndpoint = function (req, res) {
    console.log('request body: ', req.body);
    var sheets = sheets_json_1.default.sheets;
    var existingSheet = sheets.find(function (sheet) { return sheet.info.name === req.body.info.name; });
    if (existingSheet) {
        //return error
        res.send('Choose a different id');
    }
    else {
        sheets.push(req.body);
        var newData = {
            sheets: sheets
        };
        fs_1.default.writeFileSync('./data/sheets.json', JSON.stringify(newData));
        res.send('Your character was saved!');
    }
};
exports.createSheetEndpoint = createSheetEndpoint;
