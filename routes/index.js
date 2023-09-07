var express = require('express');
var router = express.Router();
var Cart=require('../models/cart');
var Wish=require('../models/wish');
var Product=require('../models/product');
var western=require('../models/western');
var downs = require('../models/down');
var saree = require('../models/saree');
var tops = require('../models/tops');
var lehanga = require('../models/lehanga');
var  skirt= require('../models/skirt');
var jumpsuits = require('../models/jumpsuits');
var pants = require('../models/pants');
var  dupatta= require('../models/dupatta');

/* GET home page. */
router.get('/', function(req, res, next){
  Product.find(function(err,docs)
  {
    var productChunks=[];
    var chunkSize=1;
    for(var i=0;i<docs.length;i+=chunkSize)
    {
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/index', { title: 'Ecomm' , products: productChunks});
  });
});

router.get('/western', function(req, res, next) {
  western.find(function(err,docs)
  {
    var productChunks=[];
    var chunkSize=1;
    for(var i=0;i<docs.length;i+=chunkSize)
    {
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('western', { title: 'Ecomm' , products: productChunks});
  });
});

router.get('/down', function(req, res, next) {
  downs.find(function(err,docs)
  {
    var productChunks=[];
    var chunkSize=1;
    for(var i=0;i<docs.length;i+=chunkSize)
    {
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('down', { title: 'Ecomm' , downs: productChunks});
  });
});

router.get('/wishlist', function(req, res, next){
	if(!req.session.wish){
		return res.render('shop/wishlist',{
			products:null
		});
		}
		var wish=new Wish(req.session.wish ? req.session.wish: {});
		res.render('shop/wishlist',{
			products:wish.generateArray(), totalPrice:wish.totalPrice
		});
});

router.get('/add-wish/:id', function(req, res, next){
	var productId=req.params.id;
	var wish=new Wish(req.session.wish ? req.session.wish: {});
	Product.findById(productId, function(err,product){
		 if(err){
		  return res.redirect('/');
		  }
			wish.add(product, product.id); 
			req.session.wish=wish;
			console.log(req.session.wish);
			res.redirect('/');
		});
});

//wish western

router.get('/add-western-wish/:id', function(req, res, next){
	var productId=req.params.id;
	var wish=new Wish(req.session.wish ? req.session.wish: {});
	western.findById(productId, function(err,product){
		 if(err){
		  return res.redirect('/');
		  }
			wish.add(product, product.id); 
			req.session.wish=wish;
			console.log(req.session.wish);
			res.redirect('/');
		});
});


router.get('/add-cart/:id', function(req, res, next){
	var productId=req.params.id;
	var cart=new Cart(req.session.cart ? req.session.cart: {});
	western.findById(productId, function(err,product){
		 if(err){
		  return res.redirect('/western');
		  }
			cart.add(product, product.id); 
			req.session.cart=cart;
			console.log(req.session.cart);
			res.redirect('/western');
		});
});


router.get('/saree', function(req, res, next) {
  saree.find(function(err,docs)
  {
    var productChunks=[];
    var chunkSize=1;
    for(var i=0;i<docs.length;i+=chunkSize)
    {
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('saree', { title: 'Ecomm' , sarees: productChunks});
  });
});


router.get('/add-saree-cart/:id', function(req, res, next){
	var productId=req.params.id;
	var cart=new Cart(req.session.cart ? req.session.cart: {});
	saree.findById(productId, function(err,product){
		 if(err){
		  return res.redirect('/saree');
		  }
			cart.add(product, product.id); 
			req.session.cart=cart;
			console.log(req.session.cart);
			res.redirect('/saree');
		});
});


router.get('/tops', function(req, res, next) {
  tops.find(function(err,docs)
  {
    var productChunks=[];
    var chunkSize=1;
    for(var i=0;i<docs.length;i+=chunkSize)
    {
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('tops', { title: 'Ecomm' , products: productChunks});
  });
});

router.get('/add-tops-cart/:id', function(req, res, next){
	var productId=req.params.id;
	var cart=new Cart(req.session.cart ? req.session.cart: {});
	tops.findById(productId, function(err,product){
		 if(err){
		  return res.redirect('/tops');
		  }
			cart.add(product, product.id); 
			req.session.cart=cart;
			console.log(req.session.cart);
			res.redirect('/tops');
		});
});

router.get('/skirt', function(req, res, next) {
  skirt.find(function(err,docs)
  {
    var productChunks=[];
    var chunkSize=1;
    for(var i=0;i<docs.length;i+=chunkSize)
    {
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('skirt', { title: 'Ecomm' , products: productChunks});
  });
});

router.get('/add-skirt-cart/:id', function(req, res, next){
	var productId=req.params.id;
	var cart=new Cart(req.session.cart ? req.session.cart: {});
	skirt.findById(productId, function(err,product){
		 if(err){
		  return res.redirect('/skirt');
		  }
			cart.add(product, product.id); 
			req.session.cart=cart;
			console.log(req.session.cart);
			res.redirect('/skirt');
		});
});

router.get('/lehanga', function(req, res, next) {
  lehanga.find(function(err,docs)
  {
    var productChunks=[];
    var chunkSize=1;
    for(var i=0;i<docs.length;i+=chunkSize)
    {
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('lehanga', { title: 'Ecomm' , products: productChunks});
  });
});

router.get('/add-lehanga-cart/:id', function(req, res, next){
	var productId=req.params.id;
	var cart=new Cart(req.session.cart ? req.session.cart: {});
	lehanga.findById(productId, function(err,product){
		 if(err){
		  return res.redirect('/lehanga');
		  }
			cart.add(product, product.id); 
			req.session.cart=cart;
			console.log(req.session.cart);
			res.redirect('/lehanga');
		});
});


router.get('/pants', function(req, res, next) {
  pants.find(function(err,docs)
  {
    var productChunks=[];
    var chunkSize=1;
    for(var i=0;i<docs.length;i+=chunkSize)
    {
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('pants', { title: 'Ecomm' , products: productChunks});
  });
});

router.get('/add-pants-cart/:id', function(req, res, next){
	var productId=req.params.id;
	var cart=new Cart(req.session.cart ? req.session.cart: {});
	pants.findById(productId, function(err,product){
		 if(err){
		  return res.redirect('/pants');
		  }
			cart.add(product, product.id); 
			req.session.cart=cart;
			console.log(req.session.cart);
			res.redirect('/pants');
		});
});

router.get('/dupatta', function(req, res, next) {
  dupatta.find(function(err,docs)
  {
    var productChunks=[];
    var chunkSize=1;
    for(var i=0;i<docs.length;i+=chunkSize)
    {
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('dupatta', { title: 'Ecomm' , products: productChunks});
  });
});

router.get('/add-dup-cart/:id', function(req, res, next){
	var productId=req.params.id;
	var cart=new Cart(req.session.cart ? req.session.cart: {});
	dupatta.findById(productId, function(err,product){
		 if(err){
		  return res.redirect('/dupatta');
		  }
			cart.add(product, product.id); 
			req.session.cart=cart;
			console.log(req.session.cart);
			res.redirect('/dupatta');
		});
});


router.get('/jumpsuits', function(req, res, next) {
  jumpsuits.find(function(err,docs)
  {
    var productChunks=[];
    var chunkSize=1;
    for(var i=0;i<docs.length;i+=chunkSize)
    {
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('jumpsuits', { title: 'Ecomm' , products: productChunks});
  });
});

router.get('/add-jump-cart/:id', function(req, res, next){
	var productId=req.params.id;
	var cart=new Cart(req.session.cart ? req.session.cart: {});
	jumpsuits.findById(productId, function(err,product){
		 if(err){
		  return res.redirect('/jumpsuits');
		  }
			cart.add(product, product.id); 
			req.session.cart=cart;
			console.log(req.session.cart);
			res.redirect('/jumpsuits');
		});
});




router.get('/add-ethnic-cart/:id', function(req, res, next){
	var productId=req.params.id;
	var cart=new Cart(req.session.cart ? req.session.cart: {});
	downs.findById(productId, function(err,product){
		 if(err){
		  return res.redirect('/down');
		  }
			cart.add(product, product.id); 
			req.session.cart=cart;
			console.log(req.session.cart);
			res.redirect('/down');
		});
});


router.get('/add-to-cart/:id', function(req, res, next){
	var productId=req.params.id;
	var cart=new Cart(req.session.cart ? req.session.cart: {});
	Product.findById(productId, function(err,product){
		 if(err){
		  return res.redirect('/');
		  }
			cart.add(product, product.id); 
			req.session.cart=cart;
			console.log(req.session.cart);
			res.redirect('/');
		});
});

///add-wish-to-cart

router.get('/add-wishto-cart/:id', function(req, res, next){
	var productId=req.params.id;
	var cart=new Cart(req.session.cart ? req.session.cart: {});
	Product.findById(productId, function(err,product){
		 if(err){
		  return res.redirect('/');
		  }
			cart.add(product, product.id); 
			req.session.cart=cart;
			console.log(req.session.cart);
			res.redirect('/');
		});
});

router.get('/wishlist', function(req, res, next){
	if(!req.session.wish){
		return res.render('/shop/wishlist',{
			products:null
		});}
		var wish=new Wish(req.session.wish ? req.session.wish: {});
		res.render('shop/wishlist',{
			products:wish.generateArray(), totalPrice:wish.totalPrice
		});
});


router.get('/shopping-cart', function(req, res, next){
	if(!req.session.cart){
		return res.render('shop/shopping-cart',{
			products:null
		});
		}
		var cart=new Cart(req.session.cart ? req.session.cart: {});
		res.render('shop/shopping-cart',{
			products:cart.generateArray(), totalPrice:cart.totalPrice
		});
});

//wish
router.get('/reduced/:id',function(req,res,next)
{
    var productId=req.params.id;
    var wish=new Wish(req.session.wish ? req.session.wish: {});
    wish.reduceByOne(productId);
    req.session.wish=wish;
    res.redirect('/wishlist');
});

//to show reduced product one by one
router.get('/reduce/:id',function(req,res,next)
{
    var productId=req.params.id;
    var cart=new Cart(req.session.cart ? req.session.cart: {});
    cart.reduceByOne(productId);
    req.session.cart=cart;
   res.redirect('/shopping-cart'); 
});

//wish
router.get('/removed/:id',function(req,res,next)
{
    var productId=req.params.id;  
    var wish=new Wish(req.session.wish ? req.session.wish: {});  
    wish.deleteAll(productId);
    req.session.wish=wish;
    res.redirect('/wishlist');
  });
//to show after deleting product
router.get('/remove/:id',function(req,res,next)
{
    var productId=req.params.id;  
    var cart=new Cart(req.session.cart ? req.session.cart: {});  
    cart.deleteAll(productId);
    req.session.cart=cart;
  
    res.redirect('/shopping-cart');
  });

  
  router.get('/checkout',isLoggedIn,function(req,res,next)
  {
	if(!req.session.cart)
	{
	  return res.redirect('/shopping-cart');
	}
	var cart=new Cart(req.session.cart);
	var errMsg=req.flash('error')[0];
	res.render('shop/checkout',
	{
	  total:cart.totalPrice,
	  errMsg:errMsg,
	  noError: !errMsg
	});
  });
  
  router.post('/checkout',isLoggedIn,function(req, res, next){
	if(!req.session.cart){
	  return res.redirect('/shopping-cart');
	}
	var cart=new Cart(req.session.cart);
	var stripe=require("stripe")(
	  "sk_test_HpOseewlg7jroZ7Fmu66hUf9005d8TvxWu"
	);
	stripe.charges.create({
	  amount:cart.totalPrice * 100,
	  currency:"usd",
	  source: 'tok_visa',
	  description:" Shopping"
	},function(err,charge){
	  if(err){
		req.flash('error',err.message);
		return res.redirect('/checkout');
	  }
  
	  req.flash('success',"Payment Successfull");
	  req.session.cart=null;
	  res.redirect('/payment');
	});
  });
  
  module.exports = router;
  
  function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/user/signin');
  }