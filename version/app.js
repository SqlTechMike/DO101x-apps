const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = '<html><h1>This is version 2 of the app.</h1>' + '\n</html>';

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
