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
//não sei direito como isso funciona
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
//endpoints
app.get('/', home_1.homeEndpoint);
app.post('/sheet/create', createSheet_1.createSheetEndpoint);
app.get('/sheet/get', getSheet_1.getSheetEndpoint);
app.put('/sheet/edit', editSheet_1.editSheetEndpoint);
//escolher aqui qual porta usar
app.listen(3001, function () {
    console.log('App is listening on port 3001!');
});
