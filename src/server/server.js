var express = require('express');

var app = express();

app.use(express.static('src/client'));

app.listen(3000);
