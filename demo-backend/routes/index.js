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
    onSuccess(response.data)
    console.log("Data fetched and stored");
  })
  .catch(function (error) {
    // handle error
    throw error
  })
  .then(function () {
    console.log("Process finished");
  });

});

function onSuccess(response) {
  response.products.forEach(element => {
    //console.log(element.productName);
    let newProduct = new Products();
    newProduct.productName = element.productName;
    newProduct.description = element.description;
    newProduct.price = element.price;
    newProduct.category = element.category;
    newProduct.imageUrl = element.imageUrl;
    newProduct.reviews = element.reviews;
    //console.log(newProduct);
    newProduct.save();

  } );

}



module.exports = router;
