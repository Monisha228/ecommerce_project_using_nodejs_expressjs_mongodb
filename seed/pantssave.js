var Product=require('../models/pants');

var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Project');

var products=[
    new Product({
        imagePath:'https://i.pinimg.com/236x/19/54/6b/19546bab15bab71144f51d3eb6fbaa86.jpg',
        title:'Pants',
        description:'Upto 60% offer',
        price:350
    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/6c/3c/b6/6c3cb6c4f783289d02196a433634fe9a.jpg',
        title:'Pants',
        description:'Upto 40% offer',
        price:850
    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/bf/b9/a0/bfb9a02070c7da9f9e823ab800cdd08b.jpg',
        title:'Pants',
        description:'Upto 60% offer',
        price:950

    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/87/d4/a0/87d4a0344ecb98c8c72f9247901118fb.jpg',
        title:'Pants',
        description:'Upto 50% offer',
        price:300

    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/12/31/78/12317887feff02efaa419a72a222725b.jpg',
        title:'Pants',
        description:'Upto 60% offer',
        price:750

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