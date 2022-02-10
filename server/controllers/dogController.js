const getDogs = (req, res) => {
  res.status(200).json({ message: 'Get dogs' });
};

const addDog = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  const body = req.body;
  console.log(body);
  res.status(200).json({ message: body });
};

const updateDog = (req, res) => {
  res.status(200).json({ message: `Update dog with id: ${req.params.id} ` });
};

const deleteDog = (req, res) => {
  res.status(200).json({ message: `Delete dog with id ${req.params.id}` });
};

module.exports = {
  getDogs,
  addDog,
  updateDog,
  deleteDog,
};
