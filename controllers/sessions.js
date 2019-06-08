const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const User = require('../model/user.js')

router.get('/' , (req , res) => {
	res.render('sessions/new.ejs')
})



router.post('/', (req , res) => {
	console.log(req.body)

	User.findOne({ username: req.body.username},(err , foundUser) => {
		console.log(foundUser)
		if(!foundUser){
			res.redirect('/sessions/new')
		}else if(bcrypt.compareSync(req.body.password , foundUser.password)){
			req.session.currentUser = foundUser;

			res.redirect('/place')
		}else{
			res.send('wrong password!');
		}
	})
})

router.delete('/', (req , res) => {
    req.session.destroy(()=>{
        res.redirect('/');
    });
})


module.exports = router;