var express = require('express');
var router = express.Router();
const axios = require ('axios');
const mongoose = require('mongoose');

//We need the products model
const Products = require('../model/products');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ATS Problem' });
});


router.get('/fetch_store', async function(req, res, next) {
  console.log("/processing fetching and storing tasks");
  const url ="https://tech.dev.ats-digital.com/api/products?size=100";
  axios.get(url)
  .then(function (response) {
    // handle success
    onSuccess(response)
    console.log("Data fetched and stored");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    console.log("Process finished");
  });

});

function onSuccess(response) {
  Products.create(response.data);
}



module.exports = router;
