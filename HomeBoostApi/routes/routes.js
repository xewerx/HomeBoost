const express = require('express');
const router = express.Router();

const myPC = require('../controllers/myPC');
const myRouter = require('../controllers/myRouter');

router.get('/mute', myPC.mute);
router.get('/volumeplus', myPC.volumePlus);
router.get('/volumeminus', myPC.volumeMinus);
router.get('/shutdown', myPC.shutDown);

router.get('/reboot', myRouter.reboot);
//router.get('/internetoff', myRouter.internetOff);


module.exports = router;