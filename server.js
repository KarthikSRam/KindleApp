var express = require('express');
  var app = express();
  app.use(express.static('public'));
  var books = [
      {
        title: 'Harry Potter',
        author: 'J.K. Rowling'
      },
      {
        title: 'The Lord of the Rings',
        author: 'Tolkien'
      },
      {
        title: 'Becoming',
        author: 'Michelle Obama'
      }
    ];
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/', function (req, res) {
    //res.send('Welcome to Kindle App!');
    res.sendFile('index.html' , { root : __dirname});
  });

  app.get('/api/books', function(req, res) {
    res.json(books);
  });

  app.listen(3000, function () {
    console.log('Kindle app listening at http://localhost:3000/');
  });
