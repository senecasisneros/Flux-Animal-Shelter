'use strict';

const express = require('express');
const router = express.Router();

const Owner = require('../models/owner');

router.route('/')
  .get((req, res) => {
    Owner.find({}, (err, owners) => {
      res.status(err ? 400 : 200).send(err || owners);
    });
  })
  .post((req, res) => {
    Owner.create(req.body, (err, newOwner) => {
      res.status(err ? 400 : 200).send(err || newOwner);
    });
  });

///////////////////////////////////////////////////////
router.get('/:id', (req, res) => {
Owner.findById(req.params.id, (err, owner) => {
  if(err || !owner) {
    return res.status(400).send(err || "Owner not found");
  }
  res.send(owner)
}).populate('owner')
})

/////////////////////////////////////////////

router.put('/:ownerId/addOwner/:animalId', (req, res) => {
Owner.findById(req.params.ownerId, (err, owner) => {
  if(err || !owner) {
    return res.status(400).send(err || "Owner not found");
  }

  let ownerId = req.params.ownerId;

  owner.owner = ownerId;

  owner.save((err, savedOwner) => {
    return res.status(400).send(err || savedOwner);
  })
})
})



////////////////////////////////////////////////////////////////


router.route('/:id')
  .get((req, res) => {
    Owner.findById(req.params.id, (err, owner) => {
      res.status(err ? 400 : 200).send(err || owner);
    });
  })
  .delete((req, res) => {
    Owner.findByIdAndRemove(req.params.id, err => {
      res.status(err ? 400 : 200).send(err);
    })
  })
  .put((req, res) => {
    Owner.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, owner) => {
      if(err) {
        return res.status(400).send(err);
      }

      Owner.find({}, (err, owners) => {
        res.status(err ? 400 : 200).send(err || owners);
      });
    });
  })

module.exports = router;
