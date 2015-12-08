var express = require('express'),
  bodyParser = require('body-parser'),
  cors   = require('cors'),
  morgan   = require('morgan'),
  router = require('./router');
var port = process.env.PORT || 3001;
var app = express();
app.set('name', 'namesvc');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use('/api', router);
app.listen(port, function() {
  console.log(app.get('name')+'listening on port '+port);
});
