const express = require('express');
const path = require('path');
const indexRoute = require('./routes/index')
require('dotenv').config() 

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


app.use(express.urlencoded({ extended: true }));

app.use('/',indexRoute)
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
