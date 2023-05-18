const router = require('express').Router();
const data = require('../data/phones.json');

// Show all phones (use the phones.json) as fake data
router.get('/', (req, res, next) => {
    res.status(200).json(data);
});


///phones/:id Show a phone details
router.get('/:id', (req, res, next) => {
  const phoneId = parseInt(req.params.id);
  console.log(phoneId);
  const phone = data.find((phone) => phone.id === phoneId);
  if (phone) {
    res.status(200).json(phone);
  } else {
    res.status(404).json({ message: 'Phone not found' });
  }
});


module.exports = router;