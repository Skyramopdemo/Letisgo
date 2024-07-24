const express = require('express')
const path = require('path'); 
require('dotenv').config();

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const port = process.env.PORT; 
const hostname = process.env.HOST;

app.get('/', (req, res) => {
  const data = {
    map_api: process.env.MAP_API_KEY,
    route_api: process.env.ROUTE_API_KEY,
    places_api: process.env.PLACES_API_KEY
  };
  res.render('index', data);
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 