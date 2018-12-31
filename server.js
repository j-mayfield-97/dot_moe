const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./routes/api/items');


const app =  express();

//middleware
app.use(bodyParser.json());

//DB
const db = require('./config/key.js').mongoURI;
//connect to mongo
//.then is related to connect being a promise based function
mongoose.connect(db, { useNewUrlParser: true })
.then( () => console.log('MongoDB connected'))
.catch(err => console.log(err));

//use routes
app.use('/api/items', items);

//set the port 
const port = process.env.PORT || 5000;
//start the server
//${var} is variable syntax 
app.listen(port, () => console.log(`server started on port ${port}`));