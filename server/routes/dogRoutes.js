const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get dogs' });
});

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Add dog' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Update dog with id: ${req.params.id} ` });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `Delete dog with id ${req.params.id}` });
});

module.exports = router;
