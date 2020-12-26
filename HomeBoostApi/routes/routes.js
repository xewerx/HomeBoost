const express = require('express');
const router = express.Router();

const myPC = require('../controllers/myPC');

router.get('/mute', myPC.mute);
router.get('/volumeplus', myPC.volumePlus);
router.get('/volumeminus', myPC.volumeMinus);
router.get('/shutdown', myPC.shutDown);



module.exports = router;