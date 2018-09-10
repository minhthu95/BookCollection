var express = require('express');
var router = express.Router();

/* GET about listing. */
router.get('/', function(req, res, next) {
    res.send('My deployment github repository can be found at https://github.com/minhthu95/DeployToAzure');
});

module.exports = router;