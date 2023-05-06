const router = require('express').Router();
const Phone = require('../models/Phone.model');
const moongose = require('mongoose');

// Show all phones (use the phones.json) as fake data
router.get('/phones', (req, res, next) => {
    Phone.find()
        .then((phones) => {
            res.status(200).json(phones);
        })
        .catch((err) => {
            res.status(500).json({
                errorMessage: 'Something went wrong',
                message: err,
            });
        });
}
);

//	Show a phone details
router.get('/phones/:phoneId', (req, res, next) => {
    const { phoneId } = req.params;
    Phone.findById(phoneId)
        .then((phone) => {
            res.status(200).json(phone);
        })
        .catch((err) => {
            res.status(500).json({
                errorMessage: 'Something went wrong',
                message: err,
            });
        });
}
);
