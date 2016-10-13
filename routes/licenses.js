var License = require('../models/license');
var express = require('express');
var router = express.Router();

router.route('/licenses')
	.get(function(req, res) {
		  License.find(function(err, licenses) {
		    if (err) {
		      return res.send(err);
		    }

		    res.json(licenses);
		  });
	})
	
	.post(function(req, res) {
		  var license = new License();

          for(prop in req.body){
                license[prop]=req.body[prop];
            }

		  license.save(function(err) {
		    if (err) {
		      return res.send(err);
		    }

		    res.send({ message: 'License Added', data: license });
		  });         
	});

router.route('/licenses/:id')
    .put(function(req,res){
        License.findOne({_id:req.params.id},function(err,license){

            if(err)
                res.send(err);

           for(prop in req.body){
                license[prop]=req.body[prop];
           }

            // save the license
            license.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'License updated!' });
            });

        });
    })

    .get(function(req,res){
        License.findOne({_id:req.params.id},function(err, license) {
            if(err)
                res.send(err);

            res.json(license);
        });
    })

    .delete(function(req,res){
        License.remove({
            _id: req.params.id
        }, function(err, license) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports=router;