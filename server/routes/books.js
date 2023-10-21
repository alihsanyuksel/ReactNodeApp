const express = require('express');

const mysql = require('mysql');

const router = express.Router();

const connectionPool = require('../database/connection-pool');

const BookRepository = require('../database/book-repository');

let repository = new BookRepository(connectionPool);

//get a single book
router.get('/:id', function(req, res){
  repository.get(req.params.id, (err, result) => {
    if(err) {
      res.status(500).json({'error': err.toString()});
    }else {
      res.status(200).json(result);
    }
  });
}); 

//update a book
router.put('/:id', function(req, res){
  repository.update(req.params.id, req.body, (err, result) => {
    if(err) {
      res.status(500).json({'error': err.toString()});
    }else {
      res.status(200);
    }
  });

  res.sendStatus(200);
})

//Delete a book
router.delete('/:id', function(req, res){
  repository.delete(req.params.id, (err, result) => {
    if(err) {
      res.status(500).json({'error': err.toString()});
    }else {
      res.sendStatus(200);
    }
  });
});

//save a book
router.post('/', function(req, res){
    console.log(req.body);
    repository.save(req.body, (err, result) => {
      if(err) {
        res.status(500).json({'error': err.toString()});
      }else {
        res.sendStatus(200);
      }
    });
  
} )

//get all books
router.get('/', function(req, res, next) {
 
  repository.getAll((err, result) => {
    if(err) {
      res.status(500).json({'error': err.toString()});
    }else {
      res.status(200).json(result);
    }
  });
  
});


module.exports = router;