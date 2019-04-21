const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const app = express();

//Bodyparser Middleware
app.use(express.json());

//DB config
const db = config.get('mongoURI');

//connect to mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('Mogodb connected...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
 // Set static folder
 app.use(express.static('client/build'));

 app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

 });
}

const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`server started on port ${ port }`));

// ReactDOM.render(<Navbar />, document.getElementById('navbar'));
// ReactDOM.render(<Login />, document.getElementById('login'));
// ReactDOM.render(<Signup />, document.getElementById('signup'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
