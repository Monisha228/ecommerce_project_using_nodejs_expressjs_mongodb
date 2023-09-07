var Product=require('../models/down');

var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Project');

var downs=[
    new Product({
        imagePath:'https://i.pinimg.com/564x/03/7f/20/037f2067c5436511b58d8a4f15af1b87.jpg',
        title:'Ethnic wear',
        description:'Upto 60% offer',
        price:250
    }),
    new Product({
        imagePath:'https://i.pinimg.com/736x/83/75/d6/8375d684219ec8ce7fbbb9b458812c45.jpg',
        title:'Anarkali',
        description:'Upto 60% offer',
        price:200
    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/9c/54/8b/9c548be093bdcdabde209d9066dc5ee6.jpg',
        title:'Anarkali',
        description:'Upto 60% offer',
        price:200

    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/fd/a7/ad/fda7ade497cfcfc976a24083b6f13e27.jpg',
        title:'Anarkali',
        description:'Upto 60% offer',
        price:200
    }),
    new Product({
        imagePath:'https://i.pinimg.com/564x/68/b1/64/68b164bdddb1eff67ed1a233c4ae7ba6.jpg',
        title:'Anarkali',
        description:'Upto 60% offer',
        price:200
    }),
];
var done=0;
for(var i=0;i<downs.length;i++)
{
    downs[i].save(function(err,rezult)
    {
        done++;
        if(done==downs.length)
        {
            exit();
        }
    });
}

function exit()
{
    mongoose.disconnect();
}