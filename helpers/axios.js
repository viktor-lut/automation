const axios = require('axios');
const data = require('../test-data/rest-api');

module.exports = {

  postBugs(){
    return axios
      .post('https://small-express-server.herokuapp.com/bugs', data.bug)
      .then((res) => res.data)
      .catch(err => {
        console.log(err.data);
      });
  },

  getBug(id){
    return axios
      .get('https://small-express-server.herokuapp.com/bugs/' + id)
      .then((res) => res.data)
      .catch(err => {
        console.log(err.data);
      });
  },

  removeBug(id){
    return axios
      .delete('https://small-express-server.herokuapp.com/bugs/' + id)
      .then((res) => res.data)
      .catch(err => {
        console.log(err.data);
      });
  }

};