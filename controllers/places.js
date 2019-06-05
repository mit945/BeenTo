const express = require('express')
const router = express.Router()
const Place = require('../model/place.js')

////index route////
router.get('/' , (req, res) => {
  res.render('index.ejs' ,{
  	place : Place
  });
});

///////

////seed route ////

router.get('/seed' , (req , res) => {
	Place.create([
	{
		location: 'Nagi',
		img: "",
		duraion : " 2 hours",
		expense : 124,
		fun : true

	}], (err , data) => {
			res.redirect('/place');
		})
})


////////////
////new Route ////

router.get('/new' , (req , res) => {
	res.render('new.ejs' ,{
		place : Place
	})
})

////////

///show route //

router.get('/:id' ,(req , res) => {
	res.render('show.ejs', {
		place : Place
	})
})

////////

///Update Route////

router.put('/:id' , (req , res) => {

})

/////


////edit route ///

router.get('/:id/edit' , (req , res) => {
	res.render('edit.ejs' , {
		place : Place
	})
})

///////

///Create Route ////

router.post('/' , (req , res) => {
	

})

//////

////Destroy////

router.delete('/:id' , (req , res) => {
	Place.findByIdAndRemove(req.params.id , (error,data) => {
		res.redirect('/place')
	})
})

module.exports = router;