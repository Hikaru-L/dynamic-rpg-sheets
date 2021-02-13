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

//não sei direito como isso funciona
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//endpoints
app.get('/', homeEndpoint)
app.post('/sheet/create', createSheetEndpoint)
app.get('/sheet/get', getSheetEndpoint)
app.put('/sheet/edit', editSheetEndpoint)

//escolher aqui qual porta usar
app.listen(3001, () => {
console.log('App is listening on port 3001!');
});