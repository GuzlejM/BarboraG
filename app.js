const express = require('express'),
app = express();

app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(3000, () => {
  console.log("Server on!")
});