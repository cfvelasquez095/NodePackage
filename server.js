var express = require('express');
const fetch = require('@cfvelasquez/labfetch');
var app = express();

app.get('/', function(req, res) {
    fetch.getComments(res).then(comments => res.send(comments))
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});