module.exports=function Wish(oldWish)

{
    this.items=oldWish.items || {};
    this.totalQty=oldWish.totalQty || 0;
    this.totalPrice = oldWish.totalPrice || 0;
    this.add=function(item, id)
    {
        var storedItem=this.items[id];
        if(!storedItem)
        {
            storedItem= this.items[id]={item:item,quty:0,price:0};
        }
        storedItem.quty++;
        storedItem.price=storedItem.item.price * storedItem.quty;
        this.totalQty++;
        this.totalPrice += storedItem.item.price;
    };
    
    this.generateArray=function(){
        var arr=[];
        for(var id in this.items){
            arr.push(this.items[id]);
        };
        return arr;
    };
    this.reduceByOne=function(id)
    {
        this.items[id].quty--;   
        this.items[id].price -= this.items[id].item.price;
        this.totalQty--;
        this.totalPrice -= this.items[id].item.price;
        if(this.items[id].quty <=0)
        {
            delete this.items[id];
        }    
    };

    this.deleteAll=function(id)
    {    
        this.totalQty -=this.items[id].quty;
        this.totalPrice -=this.items[id].price;
        delete this.items[id];
    };
}