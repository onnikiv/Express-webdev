import {addCat, findCatById, listAllCats} from '../models/cat-model.js';

const getCat = (req, res) => {
  res.json(listAllCats());
};

const getCatById = (req, res) => {
  const cat = findCatById(req.params.id);
  if (cat) {
    res.json(cat);
  } else {
    res.sendStatus(404);
  }
};

const postCat = (req, res) => {
  const result = addCat(req.body);
  console.log(result);
  if (result.cat_id) {
    res.status(201);
    res.json({message: 'New cat added.', result});
  } else {
    res.sendStatus(400);
  }
};

const putCat = (req, res) => {
  const cat = findCatById(req.params.id);
  if (cat) {
    cat.cat_name = 'Jorma';
    cat.weight = 6;
    cat.owner = 'Test';
    cat.filename = 'oasdoadsodsaosa';
    cat.birthdate = '1920-01-01';
    res.json({message: 'Cat item updated.', cat});
    console.log({message: 'Cat item updated.'});
  } else {
    res.sendStatus(404);
  }
};

const deleteCat = (req, res) => {
  const cat = findCatById(req.params.id);
  if (cat) {
    res.sendStatus(200);
    const index = listAllCats().indexOf(cat);

    listAllCats().splice(index, 1);
    res.json({message: 'Cat item deleted.'});
  } else {
    res.sendStatus(404);
  }
};

export {getCat, getCatById, postCat, putCat, deleteCat};
