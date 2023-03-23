var express = require('express');
var router = express.Router();
require('dotenv').config()
const axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
  axios.get(`${process.env.FOREX_BASE_URL}?pairs=USDCAD,USDJPY,EURUSD`)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Error fetching data' });
    });
  //res.send('Commodities');
});

router.get('/pairs', function(req, res, next) {
  axios.get(`${process.env.FOREX_BASE_URL}`)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Error fetching data' });
    });
  //res.send('Commodities');
});

router.get('/rate', function(req, res, next) {
  axios.get(`${process.env.FOREX_BASE_URL}?pairs=USDCAD`)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Error fetching data' });
    });
  //res.send('Commodities');
});

module.exports = router;
