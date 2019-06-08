const express = require('express')
const router = express.Router()
const Place = require('../model/place.js')
// console.log(Place)

////index route////
router.get('/' , (req, res) => {

if(req.session.currentUser){
		Place.find( {} , (error , allPlaces) => {
	// if(error)  res.send('OOOps')
	 res.render('users/user.ejs' , {
			place : allPlaces	
		})
	})
}


});

///////

////seed route ////

router.get('/seed' , (req , res) => {
	Place.create([
	{
		location: 'Nagi',
		img: "",
		date: "02-14-2019",
		duration : "2 hours",
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

router.get('/:id' , (req , res) => {
	
	Place.findById(req.params.id , (err , foundPlace) => {
		res.render('show.ejs' , {
			place : foundPlace
		})
	})

})

////////

///Update Route////

router.put('/:id' , (req , res) => {
	    if(req.body.fun === 'on'){
        req.body.fun = true
    }else{
        req.body.fun = false
    }
    Place.findByIdAndUpdate(req.params.id ,req.body ,(err , updatePlace) => {
        res.redirect('/place')
    })
})

/////


////edit route ///

router.get('/:id/edit' , (req , res) => {
	// console.log(Place)
	Place.findById( req.params.id , (err , foundPlace) => {
		// console.log(req.params.id)
		res.render( 'edit.ejs' , {
		place : foundPlace
		})
	})
})

///////

///Create Route ////

router.post('/' , (req , res) => {
	if(req.body.fun === 'on'){ 
        req.body.fun = true;
    } else {
        req.body.fun = false;
    }
    Place.create( req.body , (error , createPlace) => {
    	if(error) res.send('Please fill out the require area!')
    else{
    	
    	console.log(createPlace)
    	res.redirect('/place')

    	}
    })

})

//////

////Destroy////

router.delete('/:id' , (req , res) => {
	Place.findByIdAndRemove(req.params.id , (error , data) => {
		res.redirect('/place')
	})
})

module.exports = router;

