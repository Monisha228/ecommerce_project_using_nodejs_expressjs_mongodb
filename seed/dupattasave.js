var Product=require('../models/dupatta');

var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Project');

var products=[
    new Product({
        imagePath:'https://i.pinimg.com/564x/15/d6/fd/15d6fdd0ddfd7253294d0122e56e0b59.jpg',
        title:'Dupatta',
        description:'Upto 50% offer',
        price:250
    }),
    new Product({
        imagePath:'https://i.pinimg.com/736x/45/95/8c/45958cc8ab61072fcae2a2db050849f5.jpg',
        title:'Dupatta only',
        description:'Upto 60% offer',
        price:200

    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/bf/ea/21/bfea21b30f05d3fb646746616f4533f2.jpg',
        title:'Red Dupaata',
        description:'Upto 80% offer',
        price:300

    }),
    new Product({
        imagePath:'https://i.pinimg.com/236x/9e/88/ee/9e88eec68341169c777cd329b9657a15.jpg',
        title:'Net dupatta',
        description:'Upto 60% offer',
        price:800

    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/44/dc/d3/44dcd33bf21e368c9e5b3f880c5f6f8a.jpg',
        title:'Dupata',
        description:'Upto 70% offer',
        price:200

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