import express from 'express'
import { homeEndpoint } from '../src/endpoints/home';
import { createSheetEndpoint } from '../src/endpoints/createSheet/createSheet';
import bodyParser from 'body-parser';
import cors from 'cors';
import { getSheetEndpoint } from '../src/endpoints/getSheet/getSheet';
import { editSheetEndpoint } from '../src/endpoints/editSheet/editSheet';

//instância do express
const app: express.Application = express();

//motherfucking cors
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//não sei direito como isso funciona
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//endpoints
app.get('/', homeEndpoint)
app.post('/cthulhu/sheet/create', cors(), createSheetEndpoint)
app.get('/cthulhu/sheet/get', cors(), getSheetEndpoint)
app.put('/cthulhu/sheet/edit', cors(), editSheetEndpoint)

//escolher aqui qual porta usar
app.listen(3001, () => {
console.log('App is listening on port 3001!');
});