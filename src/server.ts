import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { db } from './db/sqliteDB';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

import {
	getAllUsers,
	createAUser,
	getAUser,
	updateAUser,
	deleteAUser
} from './controllers/userControllers';

db();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api', getAllUsers);
app.post('/api', createAUser);
app.get('/api/:id', getAUser);
app.put('/api/:id', updateAUser);
app.delete('/api/:id', deleteAUser);

app.use(
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware()
)
	.listen(PORT, () => {
		console.log('Express works!');
	});
