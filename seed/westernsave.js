var Product=require('../models/western');

var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Project');

var products=[
    new Product({
        imagePath:'https://i.pinimg.com/564x/42/ab/2d/42ab2da6e4e69a60067bb073715b5bea.jpg',
        title:'Western',
        description:'Upto 60% offer',
        price:250
    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/9c/69/20/9c6920e8120e857ace5a2524b794b1f0.jpg',
        title:'Western',
        description:'Upto 80% offer',
        price:200

    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/a9/92/71/a99271afdf445addf1e0acafc6a18750.jpg',
        title:'Western',
        description:'Upto 40% offer',
        price:250

    }),
    new Product({
        imagePath:'https://i.pinimg.com/750x/7f/3f/88/7f3f88491bd8c758ef0446d007fa4662.jpg',
        title:'Western tunic' ,
        description:'Upto 60% offer',
        price:250

    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/f5/cd/d0/f5cdd09c6d916a90054c452978980496.jpg',
        title:'Western tops',
        description:'Upto 60% offer',
        price:250

    }),

];
var done=0;
for(var i=0;i<products.length;i++)
{
    products[i].save(function(err,rezult)
    {
        done++;
        if(done==products.length)
        {
            exit();
        }
    });
}
function exit()
{
    mongoose.disconnect();
}