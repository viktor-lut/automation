const axios = require('axios');

axios.get('https://ses-sandbox.herokuapp.com/sandbox/bugs/5bd002b0b1d62d0020ceeaf2')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });