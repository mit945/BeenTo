const express = require('express');
const router = express.Router();
const User = require('../model/user.js');
const bcrypt = require('bcrypt');



router.get('/' ,(req , res) => {

	res.render('users/new.ejs')

})

// router.get('/new', (req, res) => {
//     res.render('users/new.ejs');
// });




router.post('/', (req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, createdUser)=>{
    	req.session.currentUser = foundUser
        res.redirect('/place');
    });
});


module.exports = router;