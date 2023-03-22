var express = require('express');
var router = express.Router();
require('dotenv').config()
const axios = require('axios');

/* GET users listing. Default US news headlines */
router.get('/', function(req, res, next) {

  axios.get(`${process.env.NEWS_BASE_URL}?country=us&apiKey=${process.env.NEWS_API}`)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Error fetching data' });
    });
  //res.send('News Headlines');
});

module.exports = router;
