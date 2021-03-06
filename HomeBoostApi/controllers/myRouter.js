const {resetRouter} = require('../myTpLink/encrypt');
const {internetMenage} = require('../myTpLink/encrypt');
const {checkIsOn} = require('../myTpLink/encrypt');

exports.reboot = (req, res) => {

    resetRouter();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'IsSuccess');
    res.setHeader('IsSuccess', 'True');
    res.send("OK");
};

exports.internetOff = (req, res) => {

    internetMenage(0);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'IsSuccess');
    res.setHeader('IsSuccess', 'True');
    res.send("OK");
};

exports.internetOn = (req, res) => {

    internetMenage(1);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'IsSuccess');
    res.setHeader('IsSuccess', 'True');
    res.send("OK");
};

exports.checkIsOn = (req, res) => {
    
    checkIsOn().then(x => {
        console.log("ISON:" + x);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Expose-Headers', 'InternetState, IsSuccess');
        res.setHeader('InternetState', x);
        res.setHeader('IsSuccess', 'True');
        res.send("OK");
    })
    
};