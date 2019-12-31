const express = require('express');

const builderController = require('../../controllers/builder.controller')

const router = express.Router();

router.get('/', builderController.getAll);
router.get('/:seoUrl', builderController.get);

module.exports = router;