const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const Products = require('../model/products');
const productRouter = express.Router();
productRouter.use(bodyParser.json());


productRouter.route('/')
    .get( cors(), (req,res,next) => {
        Products.find({})
            .then((prod) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(prod);
            }, (err) => next(err)).catch((err) => next(err));
    });

productRouter.route('/:id')
    .get( cors(), (req, res, next) => {
        Products.findById(req.params.id)
        .then((prod) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(prod);
        }, (err) => next(err)).catch((err) => next(err));
    });

module.exports = productRouter;