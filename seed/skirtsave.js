var Product=require('../models/skirt');

var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Project');

var products=[
    new Product({
        imagePath:'https://i.pinimg.com/736x/01/aa/ae/01aaae39fe4c66844e893f9b8fde41b5.jpg',
        title:'Multi Skirt',
        description:'Upto 70% offer',
        price:350
    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/26/8f/de/268fde79db440a40c3ff13cc52e0e892.jpg',
        title:'Skirt',
        description:'Upto 90% offer',
        price:320

    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/ff/68/92/ff68921e9ce0d9dd4eacc7f5ee1dfedc.jpg',
        title:'Skirt',
        description:'Upto 60% offer',
        price:450

    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/24/06/c2/2406c2b5d6a1c3c79db992c05f0305b1.jpg',
        title:'Small Skirt',
        description:'Upto 60% offer',
        price:350

    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/33/53/e2/3353e26e6671038354fefe22e543ef41.jpg',
        title:'Long Skirt',
        description:'Upto 60% offer',
        price:350

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