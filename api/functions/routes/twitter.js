var express = require('express');
var router = express.Router();

var twitterController = require('../controllers/twitter')

router.post('/blocks/create', twitterController.createBlocks)

module.exports = router;
