import express from 'express';
import api from './api/index.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.send('Here will the my Express assignments :)');
});

app.use('/api/vi', api);

export default app;
