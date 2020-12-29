const {resetRouter} = require('../myTpLink/encrypt');

exports.reboot = (req, res) => {

    resetRouter()
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send("OK")
};