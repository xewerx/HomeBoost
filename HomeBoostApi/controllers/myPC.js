const { exec } = require("child_process");

exports.mute = (req, res) => {
    exec("nircmd.exe mutesysvolume 2", (error, stdout, stderr) => {
        console.log("muted");
    });
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'IsSuccess');
    res.setHeader('IsSuccess', 'True');
    res.send("OK");
};

exports.volumePlus = (req, res) => {
    exec("nircmd.exe changesysvolume 1200", (error, stdout, stderr) => {
        console.log("plus");
    });
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'IsSuccess');
    res.setHeader('IsSuccess', 'True');
    res.send("OK");
};

exports.volumeMinus = (req, res) => {
    exec("nircmd.exe changesysvolume -1200", (error, stdout, stderr) => {
        console.log("minus");
    });
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'IsSuccess');
    res.setHeader('IsSuccess', 'True');
    res.send("OK");
};

exports.shutDown = (req, res) => {
    exec("nircmd.exe exitwin poweroff", (error, stdout, stderr) => {
        console.log("power off");
    });
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'IsSuccess');
    res.setHeader('IsSuccess', 'True');
    res.send("OK");
};

exports.pingapi = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'IsSuccess');
    res.setHeader('IsSuccess', 'True');
    res.send("OK");
};