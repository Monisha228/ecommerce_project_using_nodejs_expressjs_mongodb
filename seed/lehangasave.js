var Product=require('../models/lehanga');

var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Project');

var products=[
    new Product({
        imagePath:'https://i.pinimg.com/736x/35/16/fa/3516fabfd1a3a400ff6decacf7d1f695.jpg',
        title:'Lehanga',
        description:'Upto 60% offer',
        price:350
    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/6e/57/5c/6e575c6efd446c997b14814edc23bc08.jpg',
        title:'Lehanga',
        description:'Upto 40% offer',
        price:850
    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/fa/22/3d/fa223d219ff3fc1260bc8727a52afbcc.jpg',
        title:'Lehanga',
        description:'Upto 60% offer',
        price:950

    }),
    new Product({
        imagePath:'https://i.pinimg.com/236x/9e/88/ee/9e88eec68341169c777cd329b9657a15.jpg',
        title:'Lehanga',
        description:'Upto 50% offer',
        price:300

    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/dc/ba/81/dcba81f829ed3d09f2504225f4d7f47e.jpg',
        title:'Lehanga',
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