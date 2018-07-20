'use strict';

const http = require('https');
const url = require('url');
const axios = require('axios');

exports.intercept = (req, res, next) => {
  axios({
    method: 'post',
    url: 'http://localhost:70' + req.originalUrl,
    data: {}
    // headers: {
    //   authorization: req.headers.authorization
    // }
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

}