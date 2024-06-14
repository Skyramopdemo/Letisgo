const express = require('express')
const path = require('path'); 
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

const port = process.env.PORT; 



app.get('/', (req, res) => {
  //res.send(process.env.API_KEY)
  const data = {
    api: process.env.API_KEY
  };
  res.render('index', data);
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});