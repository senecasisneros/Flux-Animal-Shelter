'use strict';

const express = require('express');
const router = express.Router();

const Animal = require('../models/animal');

router.route('/')
  .get((req, res) => {
    Animal.find({}, (err, animals) => {
      res.status(err ? 400 : 200).send(err || animals);
    });
  })
  .post((req, res) => {
    Animal.create(req.body, (err, newAnimal) => {
      res.status(err ? 400 : 200).send(err || newAnimal);
    });
  });

///////////////////////////////////////////////////////
router.get('/:id', (req, res) => {
  Animal.findById(req.params.id, (err, animal) => {
    if(err || !animal) {
      return res.status(400).send(err || "Animal not found");
    }
    res.send(animal)
  }).populate('owner')
})


router.put('/:animalId/addOwner/:ownerId', (req, res) => {
  Animal.findById(req.params.animalId, (err, animal) => {
    if(err || !animal) {
      return res.status(400).send(err || "Animal not found");
    }

    let ownerId = req.params.ownerId;

    animal.owner = ownerId;

    animal.save((err, savedAnimal) => {
      return res.status(400).send(err || savedAnimal);
    })
  })
})


////////////////////////////////////////////////////////////////


router.route('/:id')
  .get((req, res) => {
    Animal.findById(req.params.id, (err, animal) => {
      res.status(err ? 400 : 200).send(err || animal);
    });
  })
  .delete((req, res) => {
    Animal.findByIdAndRemove(req.params.id, err => {
      res.status(err ? 400 : 200).send(err);
    })
  })
  .put((req, res) => {
    Animal.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, animal) => {
      if(err) {
        return res.status(400).send(err);
      }

      Animal.find({}, (err, animals) => {
        res.status(err ? 400 : 200).send(err || animals);
      });
    });
  })

module.exports = router;
