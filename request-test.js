'use-strict';

const axios = require('axios');

const book = {
    'author': 'BAli İhsan ',
    'title': 'coZOKA',
    'published': '2022-02-03'
  };

axios.delete('http://localhost:3000/books/250')
.then(response =>{
    console.log(response);
})
.catch(error =>{
    console.log(error);
}); 

