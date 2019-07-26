const fetch = require('node-fetch');

getComments = (res) => {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/comments/7')
    .then(response => response.json())
    .then(json => res.send(json))
    .then(result => resolve(result))
  })
}

module.exports = {
    getComments
}