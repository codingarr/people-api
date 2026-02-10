const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

// GET /person – list all people
router.get('/person', async (req, res) => {
  const people = await Person.find();
  res.json(people);
});

// POST /person – create a person
router.post('/person', async (req, res) => {
  const person = new Person(req.body);
  await person.save();
  res.json(person);
});

// PUT /person/:id – update person
router.put('/person/:id', async (req, res) => {
  const updated = await Person.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE /person/:id – delete person
router.delete('/person/:id', async (req, res) => {
  await Person.findByIdAndDelete(req.params.id);
  res.json({ message: 'Person deleted' });
});

module.exports = router;
