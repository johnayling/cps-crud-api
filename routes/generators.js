var Generator = require('../models/generator');
var express = require('express');
var router = express.Router();

router.route('/generators')
	.get(function(req, res) {
		  Generator.find(function(err, generators) {
		    if (err) {
		      return res.send(err);
		    }

		    res.json(generators);
		  });
	})
	
	.post(function(req, res) {
		  var generator = new Generator();

          for(prop in req.body){
                generator[prop]=req.body[prop];
           }

		  generator.save(function(err) {
		    if (err) {
		      return res.send(err);
		    }

		    res.send({ message: 'Generator Added', data: generator });
		  });
	});

router.route('/generators/:id')
    .put(function(req,res){
        Generator.findOne({_id:req.params.id},function(err,generator){

            if(err)
                res.send(err);

           for(prop in req.body){
                generator[prop]=req.body[prop];
           }

            // save the generator
            generator.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Generator updated!' });
            });

        });
    })

    .get(function(req,res){
        Generator.findOne({_id:req.params.id},function(err, generator) {
            if(err)
                res.send(err);

            res.json(generator);
        });
    })

    .delete(function(req,res){
        Generator.remove({
            _id: req.params.id
        }, function(err, generator) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports=router;