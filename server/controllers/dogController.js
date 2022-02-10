const asyncHandler = require('express-async-handler');
const Dog = require('../models/dogModel');

const getDogs = asyncHandler(async (req, res) => {
  const dogs = await Dog.find();
  res.status(200).json(dogs);
});

const addDog = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  res.status(200).json({ message: 'add dog' });
});

const updateDog = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update dog with id: ${req.params.id} ` });
});

const deleteDog = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete dog with id ${req.params.id}` });
});

module.exports = {
  getDogs,
  addDog,
  updateDog,
  deleteDog,
};
