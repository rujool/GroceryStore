var express = require('express');
var router = express.Router();

function isAuthenticated (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects

	if (req.isAuthenticated()){
		return next();
	}

	// if the user is not authenticated then redirect him to the login page
	return res.redirect('/#login');
};

//router.use('/',isAuthenticated);

router.get('/',function(req,res,next){
    res.render('index',{title: "Hello"});
});

module.exports = router;