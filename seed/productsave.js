var Product=require('../models/product');

var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Project');

var products=[
    new Product({
        imagePath:'https://i.pinimg.com/564x/dd/e8/6b/dde86b96f11c508b3be84e7015db6226.jpg',
        title:'Topwear',
        description:'Upto 50% offer',
        price:250
    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/8e/dc/33/8edc3309766d4d3e6c2349878d354d35.jpg',
        title:'Dresses',
        description:'Upto 60% offer',
        price:200

    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/bf/ea/21/bfea21b30f05d3fb646746616f4533f2.jpg',
        title:'Red Dupata',
        description:'Upto 80% offer',
        price:300

    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/91/78/5e/91785e82816f18194a88a93577986bb2.jpg',
        title:'Anarkali',
        description:'Upto 60% offer',
        price:800

    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/e0/42/5f/e0425fd93a1020a26375445be75b5eba.jpg',
        title:'Western',
        description:'Upto 70% offer',
        price:900

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
