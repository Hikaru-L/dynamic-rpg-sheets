"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var home_1 = require("../src/endpoints/home");
var createSheet_1 = require("../src/endpoints/createSheet/createSheet");
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var getSheet_1 = require("../src/endpoints/getSheet/getSheet");
var editSheet_1 = require("../src/endpoints/editSheet/editSheet");
//instância do express
var app = express_1.default();
//motherfucking cors
app.use(cors_1.default());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//não sei direito como isso funciona
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
//endpoints
app.get('/', home_1.homeEndpoint);
app.post('/cthulhu/sheet/create', cors_1.default(), createSheet_1.createSheetEndpoint);
app.get('/cthulhu/sheet/get', cors_1.default(), getSheet_1.getSheetEndpoint);
app.put('/cthulhu/sheet/edit', cors_1.default(), editSheet_1.editSheetEndpoint);
//escolher aqui qual porta usar
app.listen(3001, function () {
    console.log('App is listening on port 3001!');
});
