  import express = require('express');
  let app = express();
  import movies = require('./movies');
  app.use('/movies', movies);

// if statements to tell users what to do in routes:
  app.get('/users/:id', function(req, res, next) {
  if (req.params.id == 0) next('route');
  else next();
  }, function (req, res) {
    res.send ('regular user');
  });
  app.get('/users/:id', function(req, res) {
    res.send('admin');
  });

let server = app.listen(3000, function () {
  let port = server.address().port;
  console.log(`Server is running on PORT:${port}`);
});
