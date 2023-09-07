var Product=require('../models/jumpsuits');

var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Project');

var products=[
    new Product({
        imagePath:'https://i.pinimg.com/564x/c6/7f/5e/c67f5e6d578af2f6e0701ae4b6ed905c.jpg',
        title:'Jumpsuits',
        description:'Upto 50% offer',
        price:250
    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/9b/e6/c5/9be6c565771c518c3adde19c975d4eeb.jpg',
        title:'Jumpsuits',
        description:'Upto 60% offer',
        price:200

    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/08/8c/93/088c93d429066f2a661919fa4ef78cce.jpg',
        title:'Jumpsuits',
        description:'Upto 80% offer',
        price:300

    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/25/ed/fa/25edfa419a26bfeabed1738ba73776d5.jpg',
        title:'Jumpsuits',
        description:'Upto 60% offer',
        price:800

    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/75/37/23/753723b16d4cf66178be4fee19b6913c.jpg',
        title:'Jumpsuits',
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
