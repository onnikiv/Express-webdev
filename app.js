import express from 'express';
const hostname = '127.0.0.1';
const app = express();
const port = 3001;

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.send('Here will the my Express assignments :)');
});

app.get('/api/v1/cat', (req, res) => {
  const cat = {
    cat_id: 246,
    name: 'Kerttu-poika',
    birthdate: '2006-11-05',
    weight: 8,
    owner: 'ile',
    image: 'https://loremflickr.com/320/240/cat',
  };
  res.json(cat);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
