const express = require('express');

const Location = require('../../controllers/location.controller')

const router = express.Router();


router.get('/', Location.getAll);

router.get("/:locationId", Location.get);

module.exports = router;