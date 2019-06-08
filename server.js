//___________________
//Dependencies
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
// const db = mongoose.connection;
const Place = require('./model/place.js')
const placeController = require('./controllers/places.js')
const userController = require('./controllers/users.js')
const sessionController = require('./controllers/sessions.js')
const session = require('express-session')
// console.log(sessionController)

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = 3000;

//___________________
//Database  //need editing 
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = 'mongodb://localhost:27017/beento' || 'mongodb://localhost/'+ 'beento';

// Connect to Mongo

mongoose.connect(MONGODB_URI , {useNewUrlParser:true});
// mongoose.connect('mongodb://localhost:27017/auth',{
// 	useNewUrlParser:true
// });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});





/////Middleware////////


////parsing session//
app.use(session({
    secret: "mitchang041!", //some random string
    resave: false,
    saveUninitialized: false
}));
///////
//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}


//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
app.use('/sessions' , sessionController)
app.use('/create-account', userController);
app.use('/place' , placeController)

//___________________
// Routes
//___________________
// app.get('log-in' ,(req , res) => {
// 	res.render('index.ejs' ,{
// 		currentUser: req.session.currentUser,

// 	})
	
// })
app.get('/' , (req , res) => {
  // res.send('hello world')
  res.render('index.ejs')
})





app.listen(PORT);

