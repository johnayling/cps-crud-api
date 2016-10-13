var Product = require('../models/product');
var express = require('express');
var router = express.Router();

router.route('/products')
	.get(function(req, res) {
		  Product.find(function(err, products) {
		    if (err) {
		      return res.send(err);
		    }

		    res.json(products);
		  });
	})
	
	.post(function(req, res) {
		  var product = new Product();

          product.name = req.body.name;
          product.softwarecode = req.body.softwarecode;
          product.downloadlocation = req.body.downloadlocation;

		  product.save(function(err) {
		    if (err) {
		      return res.send(err);
		    }

		    res.send({ message: 'Product Added', data: product });
		  });
	});

router.route('/products/:id')
    .put(function(req,res){
        Product.findOne({_id:req.params.id},function(err,product){

            if(err)
                res.send(err);

           for(prop in req.body){
                product[prop]=req.body[prop];
           }

            // save the product
            product.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Product updated!' });
            });

        });
    })

    .get(function(req,res){
        Product.findOne({_id:req.params.id},function(err, product) {
            if(err)
                res.send(err);

            res.json(product);
        });
    })

    .delete(function(req,res){
        Product.remove({
            _id: req.params.id
        }, function(err, product) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports=router;