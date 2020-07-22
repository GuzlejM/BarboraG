const express = require('express'),
app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("index");
});


// Routes
app.get("/bathroom", (req, res) => {
 res.render("galleries/bathroom");
});
app.get("/chilloutzone", (req, res) => {
 res.render("galleries/chillout");
});
app.get("/paulenhouse", (req, res) => {
 res.render("galleries/paulhouse");
});
app.get("/childroom", (req, res) => {
 res.render("galleries/chillout");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server on!")
});