const express = require('express');
const path = require('path');
const fs = require('fs')

const PORT = process.env.PORT || 3001;
const app = express();
// routes
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



// use routes
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)





app.listen(PORT, () => {
  console.log(`Server now running on port ${PORT}!`);
});


