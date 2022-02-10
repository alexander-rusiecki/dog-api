const express = require('express');
const router = express.Router();
const {
  getDogs,
  addDog,
  updateDog,
  deleteDog,
} = require('../controllers/dogController');

router.get('/', getDogs);

router.post('/', addDog);

router.put('/:id', updateDog);

router.delete('/:id', deleteDog);

module.exports = router;
