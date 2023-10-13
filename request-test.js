'use-strict';

const axios = require('axios');

const book = {
    'author': 'Ali İhsan ',
    'title': 'ZOZOKA',
    'published': '2022-02-03'
  };

axios.post('http://localhost:3000/books', book)
.then(response =>{
    console.log(error);
})
.catch(error =>{
    console.log(error);
}); 

