var Product=require('../models/tops');

var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Project');

var products=[
    new Product({
        imagePath:'https://i.pinimg.com/564x/58/20/06/582006f99021a2e380a9f25365d02081.jpg',
        title:'Tops',
        description:'Upto 50% offer',
        price:250
    }),
    new Product({
        imagePath:'https://i.pinimg.com/736x/80/34/f2/8034f2687ca334f7c1ee6faaf0ba83f1.jpg',
        title:'Color Tops',
        description:'Upto 80% offer',
        price:900
    }),
    new Product({
        imagePath:'https://i.pinimg.com/736x/ab/70/d2/ab70d28322399031f50c9e2b217cb7ac.jpg',
        title:'Tops with pants',
        description:'Upto 90% offer',
        price:700

    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/ab/f2/df/abf2df2f98ed3e08d43b9b6bd8a96642.jpg',
        title:'tops with pants',
        description:'Upto 60% offer',
        price:700

    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/ab/f2/df/abf2df2f98ed3e08d43b9b6bd8a96642.jpg',
        title:'tops with pants',
        description:'Upto 60% offer',
        price:700

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