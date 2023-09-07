var express = require('express');
var csrf=require('csurf');
var passport=require('passport');
var router = express.Router();

var csrfProtection=csrf();
router.use(csrfProtection);

//to get signup
router.get('/signup', function(req, res, next) 
{
	var messages=req.flash('error');
	res.render('user/signup',
    {
		csrfToken:req.csrfToken(),
		messages:messages, 
		hasError:messages.length>0
    });
});

router.post('/signup', passport.authenticate('local.signup',
{
    successRedirect:'/user/profile',
    failureRedirect:'/user/signup',
    failureFlash:true
}));

//to get login page
router.get('/signin', function(req, res, next) 
{
	var messages=req.flash('error');
	res.render('user/signin',
    {
		csrfToken:req.csrfToken(),
		messages:messages, 
		hasError:messages.length>0
    });
});

router.post('/signin', passport.authenticate('local.signin',
{
    successRedirect:'/user/profile',
    failureRedirect:'/user/signin',
    failureFlash:true
}));

router.get('/profile',isLoggedIn,function(req,res, next){
     res.render('user/profile');
});

function isLoggedIn(req,res,next)
{
    if(req.isAuthenticated())
    {
        return next();
    }
    res.redirect('/');
}

router.get('/logout',function(req,res,next)
{
  req.logout(function(err) {
    if (err) { return next(err); }
  });
  res.redirect('/');
});

// router.get('/',notLoggedIn,function(req,res,next)
// {
//   next();
// });

module.exports = router;

// function notLoggedIn(req,res,next)
// {
//   if(!req.isAuthenticated())
//   {
//     return next();
//   }
//   res.redirect('/'); 
// }