var express = require('express');
var routes = require('./routes/routes');
var app = express();

var path = require('path');
var port = process.env.PORT || 3000;
var server_init = require('./components/server/server_init');

app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(port, server_init);