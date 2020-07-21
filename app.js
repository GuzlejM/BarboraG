const express = require('express'),
app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server on!")
});