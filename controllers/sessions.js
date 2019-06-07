const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const User = require('../model/user.js')

router.get('/new' , (req , res) => {
	res.render('sessions/new.ejs')
})



router.post('/', (req , res) => {
	User.findOne({ username: req.body.username},(err , foundUser) => {
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

router.delete('/place/log-in', (req , res) => {
    req.session.destroy(()=>{
        res.redirect('/place/log-in');
    });
})


module.exports = router;