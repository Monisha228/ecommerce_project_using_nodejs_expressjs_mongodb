var Product=require('../models/saree');

var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Project');

var sarees=[
    new Product({
        imagePath:"https://i.pinimg.com/564x/65/2f/cd/652fcd85af9efa0e3074d133d0236ee3.jp…",
        title:"Violet Saree",
        description:"Organza",
        price:700
    }),
    new Product({
        imagePath:"https://i.pinimg.com/564x/f1/60/07/f16007ae70e16a5339d943333432c0ea.jp…",
        title:"Saree with Blouse",
        description:"Sareee",
        price:705

    }),
    new Product({
        imagePath: "https://i.pinimg.com/564x/44/63/5e/44635ede5704d6bc039348ae5f9e5cfa.jp…",
        title:"Saree",
        description:"With Blouse",
        price:550
    }),
    new Product({
        imagePath:'https://i.pinimg.com/236x/9e/88/ee/9e88eec68341169c777cd329b9657a15.jpg',
        title:'BTS-Jimin',
        description:'Mininion of BTS-Jimin Park Jimin',
        price:200

    }),
    new Product({
        imagePath:'https://i.pinimg.com/236x/62/c1/9b/62c19b78fdc39dfffc6b2c4baf4e368b.jpg',
        title:'BTS-RM',
        description:'Mininion of BTS-RM Kim Namjoon',
        price:200

    }),
    new Product({
        imagePath:'https://i.pinimg.com/236x/e7/1c/c3/e71cc3a8545b3d515bc409594e8a29ea.jpg',
        title:'Bora Light Stick',
        description:'Bora Light Stick with multiple color',
        price:250
    }),
    new Product({
        imagePath:'https://i.pinimg.com/236x/ba/2e/0e/ba2e0e44557e49c2d1e5296a3293779d.jpg',
        title:'BTS- V',
        description:'Mininion of BTS-V Kim Taehyung',
        price:200

    }),
    new Product({
        imagePath:'https://i.pinimg.com/236x/37/fe/7c/37fe7c50fbb1189c365f8b35a5cbc005.jpg',
        title:'BTS-JK',
        description:'Mininion of BTS-JK Jungkook',
        price:200

    }),
    new Product({
        imagePath:'https://i.pinimg.com/236x/9e/88/ee/9e88eec68341169c777cd329b9657a15.jpg',
        title:'BTS-Jimin',
        description:'Mininion of BTS-Jimin Park Jimin',
        price:200

    }),
    new Product({
        imagePath:'https://i.pinimg.com/236x/62/c1/9b/62c19b78fdc39dfffc6b2c4baf4e368b.jpg',
        title:'BTS-RM',
        description:'Mininion of BTS-RM Kim Namjoon',
        price:200
    }),

];
var done=0;
for(var i=0;i<sarees.length;i++)
{
    sarees[i].save(function(err,rezult)
    {
        done++;
        if(done==sarees.length)
        {
            exit();
        }
    });
}
function exit()
{
    mongoose.disconnect();
}