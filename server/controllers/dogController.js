const getDogs = (req, res) => {
  res.status(200).json({ message: 'Get dogs' });
};

const addDog = (req, res) => {
  res.status(200).json({ message: 'Add dog' });
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
