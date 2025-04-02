import express from 'express';
const app = express();

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.send('Here will the my Express assignments :)');
});

app.get('/api/v1/cat', (req, res) => {
  const cat = {
    cat_id: 1,
    name: 'Jorma',
    birthdate: '1963-12-01',
    weight: 30,
    owner: 'onni',
    image: 'https://loremflickr.com/320/240/cat',
  };
  res.json(cat);
});

export default app;
