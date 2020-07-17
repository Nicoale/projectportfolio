var express =  require('express');
app = express(), 
port =process.env.PORT || 5000;
mongoose = require('mongoose'),
Portfolio =  require('./api/models/portfolioModel.js'),
bodyParser = require('body-parser');

//mongose instant connectio
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Portfoliodb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/portfolioRoutes'); //importing route
routes(app);//register route

app.listen(port);

console.log('Portfolio API server started on:'+ port);