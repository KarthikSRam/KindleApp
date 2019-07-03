var express = require('express');
  var app = express();
  app.use(express.static('public'));
  var books = [
      {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        quantity: 5,
        id: 1
      },
      {
        title: 'The Lord of the Rings',
        author: 'Tolkien',
        quantity: 5,
        id: 2
      },
      {
        title: 'Becoming',
        author: 'Michelle Obama',
        quantity: 5,
        id: 3
      }
    ];

    var people = [
        {
          name: 'John',
          borrowedBook: 'Harry Potter',
          readingList: ['Becoming']
        },
        {
          name: 'Louis',
          borrowedBook: 'Becoming',
          readingList: []
        }
    ]
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/', function (req, res) {
    //res.send('Welcome to Kindle App!');
    res.sendFile('index.html' , { root : __dirname});
    //res.render("index", {user: req.user});
  });

  app.get('/api/books', function(req, res) {
    res.json(books);
  });

  app.get('/api/people', function(req, res) {
    res.json(people);
  });

  app.listen(3000, function () {
    console.log('Kindle app listening at http://localhost:3000/');
  });
