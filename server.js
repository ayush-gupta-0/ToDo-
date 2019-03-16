// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import * as serviceWorker from './serviceWorker';
// import Navbar from './Navbar';
// import Login from './Login';
// import Signup from './Signup';


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();


//Bodyparser Middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('Mogodb connected...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`server started on port ${ port }`));

// ReactDOM.render(<Navbar />, document.getElementById('navbar'));
// ReactDOM.render(<Login />, document.getElementById('login'));
// ReactDOM.render(<Signup />, document.getElementById('signup'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
