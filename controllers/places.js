const express = require('express')
const router = express.Router()
const Place = require('../model/place.js')
// console.log(Place)

////index route////
router.get('/' , (req, res) => {

Place.find({} , (error , allPlaces) => {
	if(error)  res.send('OOOps')
		else res.render('index.ejs' , {
			place : allPlaces	
		})
	})

});

///////

////seed route ////

router.get('/seed' , (req , res) => {
	Place.create([
	{
		location: 'Nagi',
		img: "",
		duraion : "2 hours",
		expense : 124,
		fun : true

	}], (err , data) => {
			res.redirect('/place');
		})
})


////////////

////new Route ////

router.get('/new' , (req , res) => {
	res.render('new.ejs')
})

////////

///show route //

router.get('/:id' ,(req , res) => {
	// res.render('show.ejs', {
	// 	place : Place
	// })

	Place.findById(req.params.id , (err , foundPlace) => {
		res.render('show.ejs' , {
			place : Place
		})
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
	if(req.body.fun === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.fun = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.fun = false;
    }
    Place.create( req.body, (error , createPlace) => {
    	if(error) res.send('you done messed up')
    else{
    	
    	console.log(createPlace)
    	res.redirect('/place')

    	}
    })

})

//////

////Destroy////

router.delete('/:id' , (req , res) => {
	Place.findByIdAndRemove(req.params.id , (error,data) => {
		res.redirect('/place')
	})
})

module.exports = router;