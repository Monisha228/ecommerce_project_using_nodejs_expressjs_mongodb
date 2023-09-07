var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');
var expressHbs=require('express-handlebars'); //modules we used
var session=require('express-session');
var passport=require('passport');
var flash=require('connect-flash');
var validator=require('express-validator'); //
var bodyparser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');

var app = express();

mongoose.connect('mongodb://127.0.0.1:27017/Project');
require('./config/passport'); //for passport
// view engine setup
app.engine('.hbs',expressHbs({defaultLayout:'layout', extname:'.hbs'})); // to use hbs in layout
app.set('view engine', '.hbs');

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(validator()); //for validating login
app.use(cookieParser());
app.use(session({  //using express session
  secret:'myrose',
  resave: false,
  saveUninitialized:false,
}));


var Publishable_Key = 'pk_test_QPaEnpmtREKiQe4xInEDxMet003WsMGXnO'
var Secret_Key = 'sk_test_HpOseewlg7jroZ7Fmu66hUf9005d8TvxWu'
var stripe = require('stripe')(Secret_Key)

app.get('/checkout', function(req, res){
	res.render('shop/checkout', {
	key: Publishable_Key
	})
})

app.get("/payment",function(req,res){
	res.render("payment");
  });
  
// View Engine Setup

app.post('/payment', function(req, res){
	stripe.customers.create({
		email: req.body.stripeEmail,
		source: req.body.stripeToken,
		name: 'Gourav Hammad',
		address: {
			line1: 'TC 9/4 Old MES colony',
			postal_code: '452331',
			city: 'Indore',
			state: 'Madhya Pradesh',
			country: 'India',
		}
	})
	.then((customer) => {

		return stripe.charges.create({
			description: 'Web Development Product',
			currency: 'usd',
			customer: customer.id
		});
	})
	.then((charge) => {
		res.send("Success") // If no error occurs
	})
	.catch((err) => {
		res.send(err)	 // If some error occurs
	});
})

app.use(passport.initialize()); //using passport
app.use(passport.session());
app.use(flash());

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){  //authenticating users
  res.locals.login=req.isAuthenticated();
  next();
});
app.use('/', indexRouter);
app.use('/user', usersRouter);
///added
app.get("/contact",function(req,res){
  res.render("contact");
});
app.get("/faq",function(req,res){
  res.render("faq");
});
app.get("/about",function(req,res){
  res.render("about");
});

app.get("/western",function(req,res){
  res.render("western");
});

app.get("/saree",function(req,res){
  res.render("saree");
});

app.get("/lehanga",function(req,res){
  res.render("lehanga");
});

app.get("/skirt",function(req,res){
  res.render("skirt");
});

app.get("/tops",function(req,res){
  res.render("tops");
});

app.get("/down",function(req,res){
  res.render("down");
});

app.get("/pants",function(req,res){
  res.render("pants");
});

app.get("/dupatta",function(req,res){
  res.render("dupatta");
});

app.get("/jumpsuits",function(req,res){
  res.render("jumpsuits");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;