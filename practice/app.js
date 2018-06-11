var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(80, () => {
  console.log('Express App on port 80!');
});